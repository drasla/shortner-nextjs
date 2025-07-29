import dayjs from "dayjs";
import { DailyStat } from "src/libraries/prisma";

export class ChartUtility {
    public static fillMissingDates(
        original: DailyStat[],
        days = 7,
    ): { date: string; count: number }[] {
        const today = dayjs().startOf("day");
        const startDate = today.subtract(days - 1, "day");

        const dateMap = new Map(original.map(d => [dayjs(d.date).format("YYYY-MM-DD"), d.count]));

        return Array.from({ length: days }).map((_, i) => {
            const date = startDate.add(i, "day").format("YYYY-MM-DD");
            return { date, count: dateMap.get(date) || 0 };
        });
    }

    static applyGradientColors<T extends object>(
        data: T[],
        baseColor: string = "#4e70dd",
        darkenAmount: number = 0.4,
    ): (T & { fill: string })[] {
        const steps = data.length;
        return data.map((item, index) => {
            const ratio = index / Math.max(steps - 1, 1); // 0 ~ 1
            const fill = ChartUtility.darkenColor(baseColor, ratio * darkenAmount);
            return { ...item, fill };
        });
    }

    static darkenColor(hex: string, amount: number): string {
        const hsl = ChartUtility.hexToHSL(hex);
        const newLightness = Math.max(0, hsl.l * (1 - amount)); // 점점 어둡게
        return `hsl(${hsl.h}, ${hsl.s}%, ${newLightness}%)`;
    }

    static hexToHSL(hex: string): { h: number; s: number; l: number } {
        let r = 0,
            g = 0,
            b = 0;

        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex.slice(1, 3), 16);
            g = parseInt(hex.slice(3, 5), 16);
            b = parseInt(hex.slice(5, 7), 16);
        }

        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0,
            s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h *= 60;
        }

        return {
            h: Math.round(h),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    }
}

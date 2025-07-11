import { twMerge } from "tailwind-merge";
import "../../../styles/policy.css";

function TermsOfServicePage() {
    return (
        <div className={twMerge(["w-full", "p-10", "bg-light-paper"], ["rounded-lg"])}>
            <h1 className={twMerge(["pb-10", "mb-10"], ["border-b", "theme-border"])}>
                Terms of Service
            </h1>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>This Agreement</h5>
                <div>
                    <span className={"underline"}>Acceptance of terms of Use.</span>
                    <span>
                        &nbsp;This agreement is an electronic contract that sets out the legally
                        binding terms ("<span className={"font-bold"}>Terms</span>") governing your
                        use of the Site and the services available to you on the Site as described
                        more fully below (the "<span className={"font-bold"}>Service</span>"). Each
                        time you use the Site and Services, you signify that you agree to be bound
                        by these Terms. If you do not agree to these Terms, you must immediately
                        discontinue using the Site and Services.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Updates to Terms.</span>
                    <span>
                        &nbsp;We reserves the right to update or change these Terms at any time by
                        posting the most current version of the Terms on the Site. We will provide
                        notice of changes to the Terms by posting the new Terms on the Site with a
                        new Effective Date shown. All such changes in the Terms shall be effective
                        from the Effective Date set when it is posted on the Site or Services. Your
                        continued use of the Site after we post any changes to the Terms signifies
                        your agreement to any such changes. If you do not agree to these Terms, you
                        must discontinue using the Site and Services by terminating your
                        subscription.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Electronic Form.</span>
                    <span>
                        &nbsp;By accessing the Site or using a Service, you consent to have these
                        Terms and other notices provided to you in electronic form.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>The Services; User Account</h5>
                <div>
                    <span className={"underline"}>Description.</span>
                    <span>
                        &nbsp;The Services currently allow users to create shortened URLs,
                        custom-branded links, and provide various link management and analytics
                        products and services. Certain Services are available for free and others
                        require a paid subscription. In either case, if you use the Services, you
                        are considered a "<span className={"font-bold"}>User</span>".
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Eligibility.</span>
                    <span>
                        &nbsp;To use the Services, you must be at least 18 years old or the age of
                        majority in jurisdiction from which you access the Site and not be
                        prohibited by law from using the Services.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Authorized Users.</span>
                    <span>
                        &nbsp;You may grant access to your account to others ("
                        <span className={"font-bold"}>Authorized Users</span>"); however, you shall
                        at all times remain responsible for their use of the Services.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>User Representation and Warranties.</span>
                    <span>
                        &nbsp;If you use the Services, you will agree to that matter. Provide true,
                        accurate, current, and complete information about yourself as requested.
                        Maintain and properly update your account information to keep it true,
                        accurate, current, and complete, and. Not access, store, distribute or
                        transmit any viruses, codes or any other material when using the Services
                        that: is unlawful, harmful, threatening, defamatory, obscene, infringing,
                        harassing or racially or ethnically offensive; promotes or facilitates
                        illegal activity; depicts sexually explicit images; promotes violence; is
                        discriminatory based on race, gender, color, religious belief, sexual
                        orientation, disability; in a manner that is otherwise illegal or causes
                        damage or injury to any person or property; or is for the purpose of
                        tracking spam-related material.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>
                    Subscriptions; Charges on Your Billing Account
                </h5>
                <div>
                    <span className={"underline"}>Billing Account.</span>
                    <span>
                        &nbsp;If you select a Service that requires a subscription, We will charge
                        you for the selected plan using the billing information you provide (your "
                        <span className={"font-bold"}>Billing Account</span>") at the time of
                        enrollment. By enrolling in any Our Service plan,{" "}
                        <span className={"font-bold"}>
                            you authorize Us to charge your Billing Account the fees then in effect
                            for the selected Service plan.
                        </span>{" "}
                        We reserves the right to correct any errors or mistakes that it makes, even
                        if it has already requested or received payment, and to update your
                        information from available third-party sources. All subscription fees and
                        cash back earnings are in US Dollars. The terms of your payment will be
                        based on your Billing Account and may be determined by agreements between
                        you and the financial institution, credit card issuer, or other provider of
                        your chosen Billing Account.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Free or Promotional Period.</span>
                    <span>
                        &nbsp;If a Service plan includes a period during which you can try the
                        Services for free or for an introductory rate, it will automatically
                        continue after such period and your Billing Account will be charged the
                        regular plan rates. Regardless of what subscription plan you choose, you
                        accept responsibility for all recurring charges unless and until you cancel.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Cancellation.</span>
                    <span>
                        &nbsp;You may cancel a subscription at any time. If you cancel a monthly
                        billed plan, you will have access to the Services in the selected plan until
                        the end of the paid-for period and no further charges will be applied to
                        your Billing Account after such period, except for applicable overages, or
                        domain renewals if auto-renew is enabled.
                    </span>
                </div>
                <div>
                    <span className={"underline"}>Change in Amount Authorized.</span>
                    <span>
                        &nbsp;If the amount to be charged to your Billing Account varies from the
                        current rate set forth in your initial offer due to an increase in our
                        current rates (other than due to the imposition or change in the amount of
                        state sales taxes or other taxes), We shall provide notice of the amount to
                        be charged and the date of the charge at least 10 days before the scheduled
                        date of the transaction. Any agreement you have with your Payment Method
                        Provider will govern your use of your Payment Method. You agree that We may
                        accumulate charges incurred and submit them as one or more aggregate charges
                        during or at the end of each billing cycle.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Proprietary Rights</h5>
                <div>
                    <span>
                        The Site and all material published on the Site, including but not limited
                        to text, photographs, video, text, graphics, music, sounds, messages,
                        comments, ratings, and other materials, is owned by Us or its licensors and
                        is protected by copyright, patents, trademarks, trade secrets, and/or other
                        proprietary rights, including under the United States copyright laws.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Links to other Websites</h5>
                <div>
                    <span>
                        The Site may contain links to third-party websites ("External Sites"). These
                        links are provided solely as a convenience to you and not as an endorsement
                        by Us of the content on such External Sites. The content of such External
                        Sites is developed and provided by others. You should contact the site
                        administrator or Webmaster for those External Sites if you have any concerns
                        regarding such links or any content located on such External Sites. We is
                        not responsible for the content of any linked External Sites and does not
                        make any representations regarding the content or accuracy of materials on
                        such External Sites. You should take precautions when downloading files from
                        all websites to protect your computer from viruses and other destructive
                        programs. If you decide to access any third-party websites linked to the
                        Site, you do so entirely at your own risk.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Indemnity/Release</h5>
                <div>
                    <span>
                        You understand that you are personally responsible for your behavior while
                        on the Site and agree to indemnify and hold Us, and its affiliates, business
                        partners, and their respective officers, directors, employees, and agents,
                        harmless from and against any loss, damage, liability, cost, or expense of
                        any kind (including attorneys' fees) that we may incur arising out of or
                        related to any products or services purchased by you in connection with the
                        Site or the Services and in connection with a third-party claim or
                        otherwise, in relation to your use of the Services or access to the Site, or
                        your violation of either these Terms, applicable law, or the rights of any
                        third party. You are solely responsible for your own interactions with
                        others as a result of using the Services, such as creating and using
                        shortened URLs.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Access to Services</h5>
                <div>
                    <span>
                        You understand and agree that your use of the Service and/or subscription to
                        any Service plan is subject to and conditioned upon your continued adherence
                        to these Terms. Your violation of these Terms or any other agreement between
                        you and Us constitutes grounds for immediate termination of your use of the
                        Service without further notice, at our sole discretion. We may also
                        terminate your access to the Service at any time, immediately and without
                        notice, if we determine, in our sole discretion, that your conduct is
                        detrimental to our business. Termination of your access will result in
                        cancellation of all rights of access and use of Services, as well as future
                        denied access to Services or re-enrollment. We reserves the right to change,
                        discontinue, or suspend Sites or any of the Services at any time for any
                        reason.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Privacy</h5>
                <div>
                    <span>
                        This Site is governed by the terms and conditions set out in our privacy
                        policy by reference (hereinafter the "
                        <span className={"font-bold"}>Privacy Policy</span>").
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>No Third-Party Beneficiaries</h5>
                <div>
                    <span>
                        You agree that, except as otherwise expressly provided in this Agreement,
                        there shall be no third-party beneficiaries to this Agreement.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>Entire Agreement</h5>
                <div>
                    <span>
                        These Terms of Service and our Privacy Policy constitute the entire
                        agreement between you and TinyURL with respect to the Site and Services and
                        supersede all prior or contemporaneous understandings and agreements,
                        whether written or oral, with respect to the Site and Services.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TermsOfServicePage;

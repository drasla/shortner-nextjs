import { twMerge } from "tailwind-merge";
import "../../../styles/policy.css";

function PrivacyPolicyPage() {
    return (
        <div className={twMerge(["w-full", "p-10", "bg-light-paper"], ["rounded-lg"])}>
            <h1 className={twMerge(["pb-10", "mb-10"], ["border-b", "theme-border"])}>
                Privacy Policy
            </h1>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <div>
                    <span>
                        {process.env.SITE_NAME} ("
                        <span className={"font-bold"}>{process.env.SITE_NAME}</span>", "
                        <span className={"font-bold"}>we</span>," "
                        <span className={"font-bold"}>us</span>," "
                        <span className={"font-bold"}>our</span>") is dedicated to protecting your
                        privacy. This Privacy Policy outlines how we gather and use, disclose, and
                        protect your information. We created this Policy to inform you on what data
                        we collect, how we collect your data, how we share your data, and your
                        rights around the data. This Policy applies when you use our website and
                        services, both within and outside the European Union ("
                        <span className={"font-bold"}>EU</span>") and either as creator of a Link
                        (as defined below) or clicking on a Link.
                    </span>
                </div>
                <div>
                    <span>
                        We may collect and receive information about users of our Services ("
                        <span className={"font-bold"}>users</span>", "
                        <span className={"font-bold"}>you</span>" or "
                        <span className={"font-bold"}>your</span>") from various sources, including:
                        (i) information you provide through your user account on the Services (your
                        "<span className={"font-bold"}>Account</span>") if you register for the
                        Services; (ii) your use of the Services; and (iii) from third-party
                        websites, services, and partners.
                    </span>
                </div>
                <div>
                    <span>
                        For the purposes of this Policy, the Site, features, content, applications,
                        and other services provided by {process.env.SITE_NAME} will be referred to
                        as the "<span className={"font-bold"}>Services</span>".
                    </span>
                </div>
                <div>
                    <span>
                        Any capitalized terms used, but not defined, in this Policy have the
                        meanings provided in the Terms of Use. If you do not agree with our policies
                        and practices, please do not use our Services. By accessing or using our
                        Services, you agree to this Policy.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>CONTROLLER AND PROCESSOR</h5>
                <div>
                    <span>
                        Data protection and privacy laws in certain jurisdictions differentiate
                        between "controllers" and "processors" of Personal Data (as defined below).
                        A <span className={"font-bold"}>controller</span> decides the purposes and
                        means of processing personal data, while a{" "}
                        <span className={"font-bold"}>processor</span> processes Personal Data on
                        behalf of a controller based on the controller’s instructions. When you
                        create a {process.env.SITE_NAME} Link (as a "
                        <span className={"font-bold"}>User</span>"), {process.env.SITE_NAME} acts as
                        a <span className={"font-bold"}>controller</span>. When you click on a{" "}
                        {process.env.SITE_NAME} Link created by a User, we act as a{" "}
                        <span className={"font-bold"}>processor</span>. When {process.env.SITE_NAME}{" "}
                        processes Personal Data as a processor on behalf of the User (meaning the
                        creator of a shortened link) and applicable law, namely Regulation (EU)
                        2016/679 of the European Parliament and of the Council ("
                        <span className={"font-bold"}>GDPR</span>"), requires parties to put in
                        place a Data Processing Agreement (hereinafter, "
                        <span className={"font-bold"}>DPA</span>") to govern such data processing,
                        the DPA attached to these Privacy Policy.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>PERSONAL DATA</h5>
                <div>
                    <span>
                        For the purposes of this Policy "
                        <span className={"font-bold"}>Personal Data</span>" means any information
                        that can identify, relate to, describe, be associated with, or link,
                        directly or indirectly, to a particular User. This may include identifiers
                        such as name, identification number, location data, online identifier, or
                        factors specific to the physical, physiological, genetic, mental, economic,
                        cultural, or social identity of that natural person. This excludes
                        aggregated or de-identified information that is maintained in a form that is
                        not reasonably capable of being associated with or linked with you.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>
                    HOW WE LEGITIMATELY PROCESS YOUR PERSONAL DATA
                </h5>
                <div>
                    <span>
                        Our Services is entitled to process Users personal data in accordance with
                        the law. The legal basis for collecting and using the Personal Data
                        described below depends on the type of Personal Data involved and the
                        specific context in which it is collected. Our legitimate interests include
                        operating our Services effectively, communicating with you to provide
                        support, enhancing our platform, conducting marketing activities, and
                        detecting or preventing illegal activities. In certain circumstances, we may
                        also have a legal obligation to collect personal data from you or may need
                        it to protect your vital interests or those of another person. When we ask
                        you to provide Personal Data to comply with a legal requirement or to
                        execute a contractual obligation towards you, we will clarify the
                        requirement at that time and inform you whether providing your Personal Data
                        is mandatory, as well as the potential consequences if you choose not to
                        provide it.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>WE DO NOT TRACK SIGNALS</h5>
                <div>
                    <span>
                        Your browser settings may allow you to automatically transmit a "Do Not
                        Track" signal to online services you visit. Note, however, there is no
                        industry consensus as to what site and app operators should do regarding
                        these signals. Accordingly, unless and until the law is interpreted to
                        require us to do so, we do not monitor or act with respect to "Do Not Track"
                        signals.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>EMAIL MARKETING</h5>
                <div>
                    <span>
                        If you sign up for our Services or newsletter, we will send you marketing
                        emails. If you change your mind, you can opt-out at any time by selecting
                        the unsubscribe option when you receive an electronic marketing
                        communication from us. The withdrawal of your consent will not impact the
                        lawfulness of processing based on your consent prior to the withdrawal.
                        Please note that even if you opt-out of receiving commercial emails, you
                        will still receive emails that are transactional in nature, such as actions
                        taken on your account, updates to our online policies, and other
                        transactional communications.
                    </span>
                </div>
            </div>

            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>INTERNATIONAL TRANSFERS</h5>
                <div>
                    <span>
                        When you use our Services, your Personal Data may be transferred to our
                        service providers and trusted partners who maintain processing facilities
                        outside the European Economic Area ("
                        <span className={"font-bold"}>EEA</span>"). This is only for the purposes of
                        providing, and to the extent necessary to provide, the Services to you. The
                        privacy laws in these countries may not be as protective with your
                        information as the laws in your jurisdiction. Nonetheless, TinyURL has taken
                        steps to ensure robust security for your Personal Data, including the use of
                        Standard Contractual Clauses ("<span className={"font-bold"}>SCCs</span>"),
                        to guarantee that your data is adequately protected during transfers.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>
                    RETENTION OF YOUR PERSONAL DATA
                </h5>
                <div>
                    <span>
                        We will retain your Personal Data only for as long as is necessary for the
                        purposes set out in this Policy. We will retain and use your Personal Data
                        to the extent necessary to comply with our legal obligations (for example,
                        if we are required to retain your Personal Data to comply with applicable
                        laws), resolve disputes, and enforce our legal agreements and policies.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>SECURITY</h5>
                <div>
                    <span>
                        Our Services are committed to protecting your information. To do so, we
                        employ a variety of security technologies and measures designed to protect
                        information from unauthorized access, use, or disclosure. The measures we
                        use are designed to provide a level of security appropriate to the risk of
                        processing your Personal Data. Please note that no service is completely
                        secure. While we strive to protect your data, we cannot guarantee that
                        unauthorized access, hacking, data loss or a data breach will never occur.
                    </span>
                </div>
            </div>
            <div className={twMerge(["mb-15"], ["flex", "flex-col", "gap-5"])}>
                <h5 className={twMerge(["text-2xl", "font-bold"])}>
                    LINKS TO THIRD PARTY WEBSITES
                </h5>
                <div>
                    <span>
                        Our Services, email updates, and other communications may, from time to
                        time, contain links to and from the websites of others, including our
                        partner networks, advertisers, and affiliates. If you follow a link to any
                        of these websites, please note that these websites have their own privacy
                        policies and that we do not accept any responsibility or liability for these
                        policies.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyPage;

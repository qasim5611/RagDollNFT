import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BelowHead from "../belowHead/belowHead";
import React from "react";

export default () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      py={11}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
    >
      <BelowHead />
      <Container maxWidth="md">
        <Box
          mt={2}
          sx={{
            color: "#894500",
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "bold",
            fontFamily: "MilkyNice",
            textAlign: "center"
          }}
        >
          T&C, Privacy Policy And Cookies Policy
        </Box>
        <Box
          component="p"
          textAlign="justify"
          sx={{
            color: "#371F00",
            fontSize: { md: "16px", xs: "14px" },
            fontFamily: "Helvetice-Bold"
          }}
        >
          We RDC{" "}
          <a href="https://ragdollcatnft.com/" target="_blank">
            www.ragdollcatnft.com
          </a>{" "}
          are committed to defending any data that we collect concerning you. By
          using our services you agree to the use of the data that we collect in
          agreement with this Privacy Policy. We are determined to protect your
          privacy. We collect the minimum amount of data about you that is
          commensurate with providing you with an acceptable service. This
          Policy indicates the type of procedures that may result in data being
          collected about you. The ambition of this Privacy Policy is to enable
          you to comprehend which personal identifying information ("PI",
          "Personal Information") of yours is collected, how and when we might
          use your data, who has access to this information, and how you can
          correct any inaccuracies in the information. To better defend your
          privacy, we provide this notice clarifying our online information
          practices and the choices you can make about the way your information
          is collected and used. To make this notice easy to find, we make it
          public on our website. Note: Whitepaper content, Website text, and
          updates, all official social media posts are included in the terms &
          conditions. Authority reserved the right to take any decision at any
          time by a single notice or without any notice.
        </Box>

        <Box
          mt={2}
          sx={{
            color: "#894500",
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "bold",
            fontFamily: "MilkyNice",
            textAlign: "center"
          }}
        >
          Information Collected
        </Box>
        <Box
          component="p"
          textAlign="justify"
          sx={{
            color: "#371F00",
            fontSize: { md: "16px", xs: "14px" },
            fontFamily: "Helvetice-Bold"
          }}
        >
          We may collect any or all of the data via both automated means such as
          communications profiles and cookies. Confidential Information you give
          us counts on the type of service, support, or sale inquiry, and may
          include your name, address, telephone number, fax digit, and email
          address, dates of service provided, types of service supplied, payment
          history, manner of expense, amount of payments, date of payments,
          domain name or other payment details. All sensitive information is
          managed on a secure server and data is transferred. When sharing
          personal information a security icon will appear in your browser.
        </Box>

        <Box
          mt={2}
          sx={{
            color: "#894500",
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "bold",
            fontFamily: "MilkyNice",
            textAlign: "center"
          }}
        >
          Information Use
        </Box>
        <Box
          component="p"
          textAlign="justify"
          sx={{
            color: "#371F00",
            fontSize: { md: "16px", xs: "14px" },
            fontFamily: "Helvetice-Bold"
          }}
        >
          This information is used for billing and to supply service and support
          to our clients. We may also examine this information to decide our
          customer's needs and provide support for our customers. All reasonable
          protection is taken to prevent unauthorized entry into this
          information. This safeguard may require you to provide additional
          forms of originality should you wish to accept information about your
          account details. Rune Pay may email its monthly newsletter to the
          immediate contact e-mail on file, but clients are able to opt-out of
          this newsletter at any time. We use IP addresses to study trends,
          administer our site and servers, track access, and gather general
          demographic data for aggregate use. IP addresses are not linked to
          personally identifiable data. It is possible that private information
          about a client may be included in the log files due to the normal
          functions of IP addresses and SaaS applications.
        </Box>

        <Box
          mt={2}
          sx={{
            color: "#894500",
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "bold",
            fontFamily: "MilkyNice",
            textAlign: "center"
          }}
        >
          Cookies
        </Box>
        <Box
          component="p"
          textAlign="justify"
          sx={{
            color: "#371F00",
            fontSize: { md: "16px", xs: "14px" },
            fontFamily: "Helvetice-Bold"
          }}
        >
          Your Internet browser has the in-built facility for storing small text
          files - "cookies" - that hold data, which allows a website to identify
          your account. We use cookies to save your preferences and login
          information and supply personalized functionality. You can reject
          cookies by modifying your browser settings, but be aware that this
          will sabotage some of the functionality on the website. More
          information about cookies can be established.{" "}
          <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">
            https://en.wikipedia.org/wiki/HTTP_cookie
          </a>
        </Box>
      </Container>
    </Box>
  );
};

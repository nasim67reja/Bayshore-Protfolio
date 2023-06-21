import React from "react";
import Head from "next/head";

const MessengerChat: React.FC = () => {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function () {
              FB.init({
                xfbml: true,
                version: "v15.0",
              });
            };
            (function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s);
              js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk");
          `,
        }}
      />
    </Head>
  );
};

export default MessengerChat;

import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v17.0'
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <React.Fragment>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "464454144081949");
            chatbox.setAttribute("attribution", "biz_inbox");
          `
        }}
      />
    </React.Fragment>
  );
};

export default MessengerChat;

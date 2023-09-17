exports.jobNotificationMail = (jobName, name) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Course Registration Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  border-radius: 6px;
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              <a href="#"><img class="logo" src="https://res.cloudinary.com/dtguuc4py/image/upload/v1693050712/PlacementDecision/companyLogo/ov0o6cev3zuwhv3c4ztw.png"
                      alt="placement Logo"></a>
              <div class="message">Job Application Confirmation</div>
              <div class="body">
                  <p>Dear ${name},</p>
                  <p>We have add a new job opportunity from <span class="highlight">"${jobName}"</span>. Check
                      it out from <a href="https://placement-decision-project.vercel.app/all-job">click here</a>
                  </p>
              </div>
              
      </body>
      
      </html>`;
  };
  
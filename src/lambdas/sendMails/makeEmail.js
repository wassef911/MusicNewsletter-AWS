const makeEmail = (link) => {
  return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Nouveau message</title>
    <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      .ExternalClass {
        width: 100%;
      }
  
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
  
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
  
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
  
      @media only screen and (max-width:600px) {
  
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important
        }
  
        h1 {
          font-size: 44px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 44px !important
        }
  
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important
        }
  
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important
        }
  
        .es-menu td a {
          font-size: 14px !important
        }
  
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important
        }
  
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important
        }
  
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 13px !important
        }
  
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important
        }
  
        *[class="gmail-fix"] {
          display: none !important
        }
  
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important
        }
  
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important
        }
  
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important
        }
  
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important
        }
  
        .es-button-border {
          display: block !important
        }
  
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important
        }
  
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important
        }
  
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important
        }
  
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important
        }
  
        .es-adapt-td {
          display: block !important;
          width: 100% !important
        }
  
        .adapt-img {
          width: 100% !important;
          height: auto !important
        }
  
        .es-m-p0 {
          padding: 0px !important
        }
  
        .es-m-p0r {
          padding-right: 0px !important
        }
  
        .es-m-p0l {
          padding-left: 0px !important
        }
  
        .es-m-p0t {
          padding-top: 0px !important
        }
  
        .es-m-p0b {
          padding-bottom: 0 !important
        }
  
        .es-m-p20b {
          padding-bottom: 20px !important
        }
  
        .es-mobile-hidden,
        .es-hidden {
          display: none !important
        }
  
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important
        }
  
        tr.es-desk-hidden {
          display: table-row !important
        }
  
        table.es-desk-hidden {
          display: table !important
        }
  
        td.es-desk-menu-hidden {
          display: table-cell !important
        }
  
        .es-menu td {
          width: 1% !important
        }
  
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important
        }
  
        table.es-social {
          display: inline-block !important
        }
  
        table.es-social td {
          display: inline-block !important
        }
  
        .hide-bg {
          background-image: none !important
        }
  
        .fadeInItem .esd-stripe {
          background-image: none !important
        }
      }
  
      @media screen and (max-width:9999px) {
        .fadeInItem {
          animation: slideTop 1.5s linear infinite
        }
  
        @keyframes slideTop {
          0% {
            padding-top: 0;
          }
  
          50% {
            padding-top: 20px;
          }
  
          100% {
            padding-top: 0;
          }
        }
      }
    </style>
  </head>
  
  <body
    style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#333333">
      <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#333333"></v:fill>
              </v:background>
          <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
        <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body hide-bg"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#212121;background-repeat:no-repeat;width:600px;background-image:url(https://lchddy.stripocdn.email/content/guids/CABINET_8cd399d86e34002dbfc2366e203785dd/images/74101540392347022.png);background-position:center top"
                    cellspacing="0" cellpadding="0" bgcolor="#212121" align="center"
                    background="https://lchddy.stripocdn.email/content/guids/CABINET_8cd399d86e34002dbfc2366e203785dd/images/74101540392347022.png">
                    <tr style="border-collapse:collapse">
                      <td
                        style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:25px;padding-right:25px;background-position:center top"
                        align="left">
                        <!--[if mso]><table style="width:550px" cellpadding="0" 
                          cellspacing="0"><tr><td style="width:394px" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;width:394px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top"
                                width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr class="es-mobile-hidden" style="border-collapse:collapse">
                                  <td align="left" style="padding:0;Margin:0;padding-bottom:10px">
                                    <h1
                                      style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:40px;font-style:normal;font-weight:normal;color:#DBDBDB">
                                      <br></h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td class="es-m-txt-c" align="center" style="padding:0;Margin:0">
                                    <h1 class="fadeInItem"
                                      style="Margin:0;line-height:48px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:40px;font-style:normal;font-weight:normal;color:#C8C5C5">
                                      Music Newsletter</h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:136px" valign="top"><![endif]-->
                        <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;width:136px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top"
                                width="100%" cellspacing="0" cellpadding="0">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;display:none"></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td style="padding:0;Margin:0;padding-left:25px;padding-right:25px;background-position:center top"
                        align="left">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:550px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0">
                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tr style="border-collapse:collapse">
                                        <td
                                          style="padding:0;Margin:0;border-bottom:3px solid #DE4A4A;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        style="padding:0;Margin:0;padding-top:25px;padding-left:30px;padding-right:30px;background-position:center top"
                        align="left">
                        <!--[if mso]><table style="width:540px" cellpadding="0" 
                          cellspacing="0"><tr><td style="width:240px" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr style="border-collapse:collapse">
                            <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:240px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="right"
                                    style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                    <h2
                                      style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#DBDBDB;text-align:center">
                                      &nbsp;This newsletter&nbsp;<strong
                                        style="color:#DE4A4A;font-family:arial, 'helvetica neue', helvetica, sans-serif;text-align:center">ends
                                        in&nbsp;</strong></h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:280px" valign="top"><![endif]-->
                        <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr style="border-collapse:collapse">
                            <td align="left" style="padding:0;Margin:0;width:280px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-color:#DBDBDB;border-style:dashed;border-width:2px;background-position:center top"
                                width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:20px">
                                    <img alt class="adapt-img"
                                      src="https://cdt-timer.stripocdn.email/api/v1/images/vrqoQXu-9HRhtIvhYZZzd3jzzVgQ6f_JKtgp28D4bhA?l=1616701413145"
                                      width="200"
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-position:center top"
                        align="left">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:520px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;padding-top:15px">
                                    <h2
                                      style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#DBDBDB">
                                      Monday Music</h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;padding-top:15px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#DBDBDB;font-size:16px">
                                      this is an initiative, to emprove your music taste, please stop listing to dumb
                                      stuff.</p>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0"><a target="_blank"
                                      href="${link}"
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#DE4A4A;font-size:14px"><img
                                        class="adapt-img"
                                        src="https://lchddy.stripocdn.email/content/guids/videoImgGuid/images/64321616701347224.png"
                                        alt="Click me for good music!" width="520"
                                        title="Click me for good music!" height="292"
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px"><span
                                      class="es-button-border"
                                      style="border-style:solid;border-color:#DE4A4A;background:#212121 none repeat scroll 0% 0%;border-width:2px;display:inline-block;border-radius:0px;width:auto"><a
                                        href="https://github.com/wassef911/MusicNewsletter-AWS" class="es-button"
                                        target="_blank"
                                        style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#DE4A4A;font-size:16px;border-style:solid;border-color:#212121;border-width:10px 30px 10px 30px;display:inline-block;background:#212121 none repeat scroll 0% 0%;border-radius:0px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">Project's
                                        Link</a></span></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                      <td
                        style="padding:0;Margin:0;padding-bottom:10px;padding-left:20px;padding-right:20px;background-position:center top"
                        align="left">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top"
                                width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img"
                                      src="https://lchddy.stripocdn.email/content/guids/CABINET_8cd399d86e34002dbfc2366e203785dd/images/14991540389761621.png"
                                      alt
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      width="560" height="48"></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
  
  </html>`;
}

module.exports = makeEmail;
---

layout: page
title: Contact
permalink: /contact
navigation_weight: 3
---

<div class="content">
  <div class="container">
    <div class="contact">
      <div class="contact-grids">
        <div class="contact-form">
          <form action="http://formspree.io/hackeduser@hackermail.com" method="POST">
            <div class="contact-form-row">
              <div>
                <span>Name :</span>
                <input autofocus type="text" class="text" name="name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" required>
              </div>
              <div>
                <span>Email :</span>
                <input type="text" class="text" name="_replyto" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" required>
              </div>
              <div>
                <span>Subject :</span>
                <input type="text" class="text" name="subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" required>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
            <div class="contact-form-row2">
              <span>Message :</span>
              <textarea name="message" required> </textarea>
            </div>
            <input type="hidden" name="_next" value="http://zyten.github.io/dmon-web/thanks" /> <!-- redir link-->
            <input type="text" name="_gotcha" style="display:none" /> <!--spam prevention -->
            <input type="submit" value="send">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
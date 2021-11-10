function formOverlay() {
    $('body').append(`
        <div id="contact-nav" class="cg-overlay">
        <a href="javascript:void(0)" class="cg-closebtn" onclick="closeFormOverlay()">&times;</a>
            <div class="cg-overlay-content">
                <div class="col-lg-8">
                    <!--Contact form-->
                    <form class="vlt-contact-form vlt-contact-form--style-2" novalidate="novalidate">
                        <div class="vlt-form-row two-col">
                            <div class="vlt-form-group">
                                <input class="vlt-form-control" type="text" name="name" required="required" placeholder=" ">
                                <label class="vlt-form-label" place>Tu nombre*</label>
                            </div>
                            <div class="vlt-form-group">
                                <input class="vlt-form-control" type="email" name="email" required="required" placeholder=" ">
                                <label class="vlt-form-label">Dirección de email*</label>
                            </div>
                        </div>
                        <div class="vlt-form-row two-col">
                            <div class="vlt-form-group">
                                <input class="vlt-form-control" type="tel" name="phone" placeholder=" ">
                                <label class="vlt-form-label">Número de Teléfono</label>
                            </div>
                            <div class="vlt-form-group">
                                <input class="vlt-form-control" type="text" name="title" required="required" placeholder=" ">
                                <label class="vlt-form-label">Asunto*</label>
                            </div>
                        </div>
                        <div class="vlt-form-group">
                            <textarea class="vlt-form-control" name="message" rows="5" placeholder=" "></textarea>
                            <label class="vlt-form-label">Mensaje*</label>
                        </div>
                        <div class="message success">Your message is successfully sent...</div>
                        <div class="message danger">Sorry something went wrong!</div>
                        <div class="vlt-gap-40"></div>
                        <!--Button-->
                        <button class="vlt-btn vlt-btn--secondary vlt-btn--lg">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    `);
    $('body').css({
        'overflow': 'hidden'
    });
}

function closeFormOverlay() {
    $("#contact-nav").remove();
    $(document).unbind('scroll');
    $('body').css({
        'overflow': 'visible'
    });
}
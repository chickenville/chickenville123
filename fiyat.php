<?php
include("baglan.php");
date_default_timezone_set('Europe/Istanbul');

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
						

                    

                       <div class="tab-pane panel-border active" id="hgs-query-amounts">

                                <div class="panel-inside">

                                

                                <div class="hgs-select-amount-loading" style="display: none;">
                                    <span>İşlem tamamlanıyor <p class="lds-ring"><span></span><span></span><span></span><span></span></p></span>
                                </div>


                                <div class="hgs-show-field-after-payment-type-select" style="display: block;">
                                <span class="tab-pane-heading">Yüklemek istediğiniz miktarı seçiniz:</span>
                                <div class="hgs-query-amounts-label-container"><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="5" data-price="150"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="5"><span>150 TL</span></div></div></div><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="4" data-price="50"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="3"><span>50 TL</span></div></div></div><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="2" data-price="25"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="2"><span>25 TL</span></div></div></div><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="2" data-price="10"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="1"><span>10 TL</span></div></div></div><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="4" data-price="100"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="4"><span>100 TL</span></div></div></div><div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="5" data-price="250"><div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name=""><div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="8"><span>250 TL</span></div></div></div></div>

                                <div class="hgs-ticket-warnings">
                                    
                                </div>

                                    <div class="col-sm-12 hgs-query-amounts-calc-container">
                                        <div class="hgs-query-amounts-calc">
                                            <p>
                                                <span>Yükleme Miktarı: <b class="hgsyukleme" id="hgsyukleme">0 TL</b></span>
                                                <span>Hizmet Bedeli: <b class="hizmetbedeli" id="hizmetbedeli">0 TL</b></span>
                                                <span class="text-warning">Toplam Ödeme: <b class="tbedel" id="tbedel" data-amount="0">0 TL</b></span>
                                            </p>
                                        </div>
                                    </div>
                                    <form id="hgsQueryAmount" name="hgs-query-amount" data-tab="2" novalidate="novalidate">
                                        <input type="hidden" name="selected_label" value="">
                                    </form>
                                </div>
                                </div>
                            </div>

                            <div class="pull-right">                          
								<form action="./kart.php" method="post">
									<button type="submit" style="margin-top:10px;" class="btn  text-white btn-warning ">DEVAM <img src="https://hgs.pttavm.com/v2/assets/images/buttons/right-arrow.png"></button>
								</form>
							</div>
							
                            
                            <div class="clearfix"></div>
                        </div>

                </div>
            </div> <!-- wizard container -->
        </div>
		
		
<?php
include "footer.php";
?>
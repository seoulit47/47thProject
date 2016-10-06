package com.seoulit.erp47.won.hosptlzPat.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.applicationService.AutoInsurApplicationService;
import com.seoulit.erp47.won.hosptlzPat.applicationService.DscgPatApplicationService;
import com.seoulit.erp47.won.hosptlzPat.applicationService.GooutStayoutApplicationService;
import com.seoulit.erp47.won.hosptlzPat.applicationService.HosptlzApplicationService;
import com.seoulit.erp47.won.hosptlzPat.applicationService.HosptlzTrmtCostApplicationService;
import com.seoulit.erp47.won.hosptlzPat.exception.HosptlzInsurPatException;
import com.seoulit.erp47.won.hosptlzPat.to.AutoInsurBean;
import com.seoulit.erp47.won.hosptlzPat.to.DscgPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.GooutStayoutBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatInfoBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPatReceBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;



@Service
public class HosptlzServiceFacadeImpl implements HosptlzServiceFacade{

	@Autowired
	private HosptlzApplicationService hosptlzApplicationService;

	@Autowired
    private GooutStayoutApplicationService gooutStayoutApplicationService;

    @Autowired
    private DscgPatApplicationService dscgPatApplicationService;

    @Autowired
    HosptlzTrmtCostApplicationService hosptlzTrmtCostApplicationService;
    
    @Autowired
    private AutoInsurApplicationService autoInsurApplicationService;
    
    @Override
    public List<DscgPatBean> findDscgPatList(Map<String, String> argsMap) {
        return dscgPatApplicationService.findDscgPatList(argsMap);
    }

    @Override
    public void modDscgDay(List<DscgPatBean> dscgPat) {
        dscgPatApplicationService.modDscgDay(dscgPat);

    }
	//입원환자정보 조회
    @Override
    public List<HosptlzPatInfoBean> findHosptlzPat(Map<String, String> argsMap) {
        return gooutStayoutApplicationService.findHosptlzPat(argsMap);
    }

    //외출/외박 신청 등록
    @Override
    public void batchProcessGooutStayout(List<GooutStayoutBean> gooutStayout) {
        gooutStayoutApplicationService.batchProcessGooutStayout(gooutStayout);

    }

     //외출&외박 신청서 조회.
    @Override
    public List<GooutStayoutBean> findGooutStayoutList(Map<String, String> argsMap) {
        return gooutStayoutApplicationService.findGooutStayoutList(argsMap);
    }
	@Override
	public List<ReceiptInfoBean> findHosptlzYB(Map<String, String> argsMap) {
		return hosptlzApplicationService.findHosptlzYB(argsMap);
	}

	
	@Override
	public List<HosptlzReceiptBean> findReceipt(Map<String, String> argsMap) {
		return hosptlzApplicationService.findReceipt(argsMap);
	}

	
	@Override
	public void batchProcessHosptlzReceipt(List<HosptlzReceiptBean> hosptlzReceipt) {
		hosptlzApplicationService.batchProcessHosptlzReceipt(hosptlzReceipt);

	}

	
	@Override
	public String callHosptlzReceiptSeq() {
		return hosptlzApplicationService.callHosptlzReceiptSeq();
	}

	 
	@Override
	public List<HosptlzReceiptBean> findHosptlzReceipt(Map<String, String> argsMap) {
		return hosptlzApplicationService.findHosptlzReceipt(argsMap);
	}

	
	@Override
	public String callhosptlzRsvtSeq() {
		return hosptlzApplicationService.callhosptlzRsvtSeq();
	}

	
	@Override
	public List<HosptlzRsvtBean> findHosptlzRsvt(Map<String, String> argsMap) {
		return hosptlzApplicationService.findHosptlzRsvt(argsMap);
	}

	
	@Override
	public void registerHosptlzRsvt(List<HosptlzRsvtBean> hosptlzRsvt) {
		hosptlzApplicationService.registerHosptlzRsvt(hosptlzRsvt);
	}

	
	@Override
	public void changeHosptlzRsvtYb(List<ReceiptInfoBean> receiptInfo) {
		hosptlzApplicationService.changeHosptlzRsvtYb(receiptInfo);
	}

	
	@Override
	public List<HosptlzPrdstorBean> findHosptlzPrdstorList(Map<String, String> argsMap) {
		return hosptlzApplicationService.findHosptlzPrdstorList(argsMap);
	}

	
	@Override
	public void batchProcessHosptlzRsvt(List<HosptlzPrdstorBean> hosptlzPrdstor) {
		hosptlzApplicationService.batchProcessHosptlzRsvt(hosptlzPrdstor);
	}

	@Override
	public void chanHosptlzRsvtYb(List<HosptlzPrdstorBean> hosptlzPrdstor) {
		hosptlzApplicationService.chanHosptlzRsvtYb(hosptlzPrdstor);

	}
////////////////////////////////////////////////////////////
	@Override
    public void calcuHosptlzTrmtCost(Map<String, String> argsMap) {
        // TODO Auto-generated method stub
	    hosptlzTrmtCostApplicationService.calcuHosptlzTrmtCost(argsMap);
    }

    @Override
    public List<HosptlzPatBean> findHosptlzTrmtCost(
            Map<String, String> argsMap) throws Exception {
        // TODO Auto-generated method stub
        List<HosptlzPatBean> hosptlzPatList;
        hosptlzPatList = hosptlzTrmtCostApplicationService.findHosptlzTrmtCost(argsMap);
        return hosptlzPatList;
    }

    @Override
    public HosptlzPatReceBean findHosptlzPatRece(
            Map<String, String> argsMap) {
        // TODO Auto-generated method stub
        HosptlzPatReceBean hosptlzPatReceBean;
        hosptlzPatReceBean = hosptlzTrmtCostApplicationService.findHosptlzPatRece(argsMap);
        return hosptlzPatReceBean;
    }

    @Override
    public void callHosptlzPatRece(HosptlzPatReceBean hosptlzPatReceBean) {
        // TODO Auto-generated method stub
        hosptlzTrmtCostApplicationService.callHosptlzPatRece(hosptlzPatReceBean);
    }
  
    
    @Override
    public List<AutoInsurBean> findAutoInsurList(String patNo){
        
        List<AutoInsurBean> autoInsurBeans = autoInsurApplicationService.findAutoInsurList(patNo);
        return autoInsurBeans;
    }
    
    @Override
    public void batchAutoInsurList(List<AutoInsurBean> autoInsurBeans) throws HosptlzInsurPatException{
        autoInsurApplicationService.batchAutoInsurList(autoInsurBeans) ;
    }
}

package com.seoulit.erp47.won.hosptlzPat.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.won.hosptlzPat.dao.HosptlzReceiptDAO;
import com.seoulit.erp47.won.hosptlzPat.dao.HosptlzRsvtDAO;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzPrdstorBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzReceiptBean;
import com.seoulit.erp47.won.hosptlzPat.to.HosptlzRsvtBean;
import com.seoulit.erp47.won.outPatMgt.to.ReceiptInfoBean;


@Service
public class HosptlzApplicationServiceImpl implements HosptlzApplicationService {



	@Autowired
	private HosptlzReceiptDAO hosptlzReceiptDAO;  

	@Autowired
	private HosptlzRsvtDAO hosptlzRsvtDAO;  


	

	
	@Override
	public List<ReceiptInfoBean> findHosptlzYB(Map<String, String> argsMap) {
		return hosptlzReceiptDAO.selectHosptlzYB(argsMap);
	}


	@Override
	public List<HosptlzReceiptBean> findReceipt(Map<String, String> argsMap) {
		return hosptlzReceiptDAO.selectReceipt(argsMap);
	}


	@Override
	public void batchProcessHosptlzReceipt(List<HosptlzReceiptBean> hosptlzReceipt) {
		for (HosptlzReceiptBean hosptlzReceiptBean : hosptlzReceipt) {

			switch (hosptlzReceiptBean.getStatus()) {
			case "inserted":
				hosptlzReceiptDAO.insertHosptlzReceipt(hosptlzReceiptBean);
				break;
			case "updated":
				hosptlzReceiptDAO.updateHosptlzReceipt(hosptlzReceiptBean);
				break;
			case "deleted":
				hosptlzReceiptDAO.deletedHosptlzReceipt(hosptlzReceiptBean);
			}
		}
	}


	@Override
	public String callHosptlzReceiptSeq() {
		String hosptlzReceiptNo=hosptlzReceiptDAO.selectHosptlzReceiptSeq();
		return hosptlzReceiptNo;
	}

	@Override
	public List<HosptlzReceiptBean> findHosptlzReceipt(Map<String, String> argsMap) {
		return hosptlzReceiptDAO.selectfindHosptlzReceipt(argsMap);
	}


	@Override
	public String callhosptlzRsvtSeq() {
		String hosptlzRsvtNo=hosptlzRsvtDAO.selectHosptlzRsvtSeq();
		return hosptlzRsvtNo;
	}


	@Override
	public List<HosptlzRsvtBean> findHosptlzRsvt(Map<String, String> argsMap) {
		return hosptlzRsvtDAO.selectHosptlzRsvt(argsMap);
	}

	
	@Override
	public void registerHosptlzRsvt(List<HosptlzRsvtBean> hosptlzRsvt) {
		for(HosptlzRsvtBean hosptlzRsvtBean :hosptlzRsvt){
			switch(hosptlzRsvtBean.getStatus()){
			case "inserted":
				hosptlzRsvtDAO.insertHosptlzRsvt(hosptlzRsvtBean);
			}
		}
	}

	
	@Override
	public void changeHosptlzRsvtYb(List<ReceiptInfoBean> receiptInfo) {
		for(ReceiptInfoBean receiptInfoBean :receiptInfo ){
			switch(receiptInfoBean.getStatus()){
			case "updated" :
				hosptlzRsvtDAO.updataHosptlzRsvtYb(receiptInfoBean);
			}
		}
	}

	
	@Override
	public List<HosptlzPrdstorBean> findHosptlzPrdstorList(Map<String, String> argsMap) {
		return hosptlzRsvtDAO.selectHosptlzPrdstorList(argsMap);
	}


	@Override
	public void batchProcessHosptlzRsvt(List<HosptlzPrdstorBean> hosptlzPrdstor) {
	    
		for(HosptlzPrdstorBean hosptlzPrdstorBean :hosptlzPrdstor ){
		    System.out.println("hosptlzPrdstorBean.getStatus() : "+hosptlzPrdstorBean.getStatus());
			switch(hosptlzPrdstorBean.getStatus()){
			case "updated" :
				hosptlzRsvtDAO.updataHosptlzRsvt(hosptlzPrdstorBean);
				break;
			case "deleted":
			    hosptlzRsvtDAO.deletHosptlzRsvt(hosptlzPrdstorBean);
			    break;
			}
		}

	}


	@Override
	public void chanHosptlzRsvtYb(List<HosptlzPrdstorBean> hosptlzPrdstor) {
		for(HosptlzPrdstorBean hosptlzPrdstorBean :hosptlzPrdstor ){
			switch(hosptlzPrdstorBean.getStatus()){
			case "updated" :
				hosptlzRsvtDAO.chanHosptlzRsvtYb(hosptlzPrdstorBean);
			}
		}
	}


}

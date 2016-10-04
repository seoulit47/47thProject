package com.seoulit.erp47.sup.laboratoryMedicine.applicationService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.laboratoryMedicine.dao.ClinspeDAO;
import com.seoulit.erp47.sup.laboratoryMedicine.dao.ClinspeDeliveryDAO;
import com.seoulit.erp47.sup.laboratoryMedicine.dao.ClinspeReceiptDAO;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeReceiptBean;
import com.seoulit.erp47.sup.laboratoryMedicine.to.ClinspeSequenceBean;
import com.seoulit.erp47.sup.pathology.dao.ClinspeBlokDAO;
import com.seoulit.erp47.sup.pathology.to.ClinspeBean;

/**
 * @Package  com.seoulit.erp47.sup.laboratoryMedicine.applicationService
 * @Class    LaboratoryMediApplicationServiceImpl.java
 * @Create   
 * @Author   
 * @Description
 *
 * @LastUpdated 
 */

@Service
public class LaboratoryMedicineApplicationServiceImpl implements LaboratoryMedicineApplicationService{

	@Autowired
	ClinspeDAO clinspeDAO;
	@Autowired
	ClinspeReceiptDAO clinspeReceiptDAO;
	@Autowired
	ClinspeBlokDAO clinspeBlokDAO;
	@Autowired
	ClinspeDeliveryDAO clinspeDeliveryDAO; 
	
	// 검체채취(검체번호조회)
	@Override
	public ClinspeSequenceBean findMaxClinspeNo(){
		 return clinspeDAO.selectMaxClinspeNo();
	}
	
	// 검체채취 조회
	@Override
	public List<ClinspeBean> findClinspeList(Map<String, String> argsMap){
		return clinspeDAO.selectClinspeList(argsMap);
	}
	
	// 검체채취 일괄처리 
	@Override
	public void batchClinspeProcess(List<ClinspeBean> clinspeBeanList){
		for(ClinspeBean clinspeBean : clinspeBeanList){
			switch ( clinspeBean.getStatus() ){
				case "inserted" : {
					clinspeDAO.insertClinspe(clinspeBean); 
				    clinspeDAO.insertClinspeBlok(clinspeBean); break;             
				}
				case "deleted" : { clinspeDAO.deleteClinspe(clinspeBean);  
				                   clinspeBlokDAO.deleteClinspeBlok(clinspeBean); break;}
				case "updated" : { clinspeDAO.updateClinspe(clinspeBean); break; }
			}	
		}
	}

	// 검체접수 조회
	@Override
	public List<ClinspeReceiptBean> findClinspeReceiptList(Map<String, String> argsMap){
		return clinspeReceiptDAO.selectClinspeReceiptList(argsMap);
	}
	
	// 검체접수 일괄처리 
	@Override
	public void batchClinspeReceiptProcess(List<ClinspeReceiptBean> clinspeReceiptBeanList){
		for(ClinspeReceiptBean clinspeReceiptBean : clinspeReceiptBeanList){
			switch ( clinspeReceiptBean.getStatus() ){
				case "inserted" : { System.out.println("!~!~!");clinspeReceiptDAO.insertClinspeReceipt(clinspeReceiptBean); break; }
				
				case "deleted" : {  clinspeReceiptDAO.deleteClinspeReceiptCancel(clinspeReceiptBean);
									clinspeReceiptDAO.deleteClinspeReceipt(clinspeReceiptBean); break; }
				
				case "updated" : {  clinspeReceiptDAO.updateClinspeReceipt(clinspeReceiptBean); 
									if(clinspeReceiptBean.getReceiptCd().equals("RE002")){
									clinspeReceiptDAO.insertClinspeReceiptCancel(clinspeReceiptBean); }
				                     break; }
			}	
		}
	}

	@Override
	public List<ClinspeBean> findNoReceiptClinspeList(Map<String, String> argsMap) {
		return clinspeDAO.selectNoReceiptClinspeList(argsMap);
	}

	@Override
	public List<ClinspeReceiptBean> findNoDeliveryClinspeList(Map<String, String> argsMap) {
		return clinspeDeliveryDAO.selectNoDeliveryClinspeList(argsMap);
	}

	@Override
	public void updateDeliveryClinspeStatus(Map<String, String> argsMap) {
		Map<String, Object> procedureMap=new HashMap<>();
		procedureMap.put("clinspeNo", argsMap.get("clinspeNo"));
		procedureMap.put("empNo", argsMap.get("empNo"));
		procedureMap.put("date", argsMap.get("date"));
		clinspeDeliveryDAO.callDeliveryClinspe(procedureMap);
		List<ClinspeReceiptBean> list=(List<ClinspeReceiptBean>)procedureMap.get("result");
		System.out.println(list.size()+"@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		//clinspeDeliveryDAO.updateDeliveryClinspeStatus(argsMap);
		//clinspeDeliveryDAO.insertDeliveryClinspe(argsMap);
	}
}

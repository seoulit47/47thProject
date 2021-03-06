package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.dao.DtInspDAO;
import com.seoulit.erp47.sup.checkup.dao.InspDAO;
import com.seoulit.erp47.sup.checkup.dao.PckDAO;
import com.seoulit.erp47.sup.checkup.dao.ReceDAO;
import com.seoulit.erp47.sup.checkup.dao.ReceiptDAO;
import com.seoulit.erp47.sup.checkup.dao.RsltDAO;
import com.seoulit.erp47.sup.checkup.dao.RsvtDAO;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.CodePopupBean;
import com.seoulit.erp47.sup.checkup.to.DtInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.PckBean;
import com.seoulit.erp47.sup.checkup.to.ReceBean;
import com.seoulit.erp47.sup.checkup.to.ReceiptBean;
import com.seoulit.erp47.sup.checkup.to.ReducBean;
import com.seoulit.erp47.sup.checkup.to.RsltBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.applicationService
 * @Class    SupCheckupApplicationServiceImpl.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   종합검진 어플리케이션 서비스
 *
 * @LastUpdated   2016. 09. 05.
 */

@Service
public class SupCheckupApplicationServiceImpl implements SupCheckupApplicationService{

	@Autowired
    private RsvtDAO rsvtDAO;
	@Autowired
    private PckDAO pckDAO;
	@Autowired
	private InspDAO inspDAO;
	@Autowired
	private ReceDAO receDAO;
	@Autowired
	private ReceiptDAO receiptDAO;
	@Autowired
	private DtInspDAO dtInspDAO;
	@Autowired
	private RsltDAO rsltDAO;
	
	/* 종합검진 검사관리 - 처방코드 조회 */
	@Override                 
    public List<CodePopupBean> findOcsCodeList(Map<String, String> argsMap) {
        List<CodePopupBean> odsCodeList = inspDAO.selectOcsCodeList(argsMap);
        return odsCodeList;
    }
	
	/* 종합검진 예약관리 - 예약목록 조회  */
	@Override                
	public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	    List<RsvtBean> rsvtList = rsvtDAO.selectRsvtList(argsMap);
	    return rsvtList;
	}
	

	/* 종합검진 예약관리 - 예약취소  */
	@Override
	public void cancelRsvt(Map<String, String> argsMap) {
		rsvtDAO.updateRsvtYN(argsMap);
	}
	
	/* 종합검진 예약관리 - 저장 */
	@Override                 
    public void batchRsvtProcess(Map<String, Object> map) {
        
        List<RsvtBean> rsvtList = (List<RsvtBean>) map.get("rsvtList");
        List<ChoInspBean> choInspList = (List<ChoInspBean>) map.get("choInspList");

        if(rsvtList!=null){
            for(RsvtBean rsvtBean: rsvtList){
    
                System.out.println("상태 : "+rsvtBean.getStatus());
                switch (rsvtBean.getStatus()){
                    case "inserted" :
                        rsvtDAO.insertRsvt(rsvtBean);
                        break;
                        
                    case "updated" :
                        rsvtDAO.updateRsvt(rsvtBean);
                        break;
                }
            }
        }
        
        if(choInspList!=null){
            batchChoInspProcess(choInspList);
        }
    }
	
	/* 종합검진 예약관리 - 선택검사 수정, 추가, 삭제 */
    private void batchChoInspProcess(List<ChoInspBean> choInspList) {
        for(ChoInspBean choInsp: choInspList){
            String status = choInsp.getStatus();
            if(status.equals("inserted")){
                inspDAO.insertChoInsp(choInsp);
            }else if(status.equals("deleted")){
                inspDAO.deleteChoInsp(choInsp);
            }else if(status.equals("updated")){         
                inspDAO.updateChoInsp(choInsp);
            }
        }
    }
    
    /* 종합검진 세부검사관리 - 검사 조회 */
    @Override                
    public List<InspBean> findSimpleInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = dtInspDAO.selectSimpleInspList(argsMap);
        return inspList;
    }

    /* 종합검진 세부검사관리 - 세부검사 조회 */
    @Override                 
    public List<DtInspBean> findDtInspList(Map<String, String> argsMap) {
        System.out.println(argsMap.get("inspCd"));
        List<DtInspBean> dtInspList = dtInspDAO.selectDtInspList(argsMap);
        return dtInspList;
    }

    /* 종합검진 세부검사관리 - 수정, 추가 */
    @Override                 
    public void batchDtInspProcess(List<DtInspBean> dtInspList) {
        for (DtInspBean dtInspBean: dtInspList) {
            switch (dtInspBean.getStatus()) {
            case "inserted":
                dtInspDAO.insertDtInsp(dtInspBean);
                break;
            case "updated":
                dtInspDAO.updateDtInsp(dtInspBean);
                break;
            }
        }
    }
    
    /* 종합검진 검사관리 - 검사목록 조회 */
    @Override                 
    public List<InspBean> findInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = inspDAO.selectInspList(argsMap);
        return inspList;
    }
    
    /* 종합검진 검사관리 - 수정, 추가 */
    @Override                
    public void batchInspProcess(List<InspBean> inspList) {
        for (InspBean inspBean: inspList) {
            
            switch (inspBean.getStatus()) {
            case "inserted":
                inspDAO.insertInsp(inspBean);
                break;
            case "updated":
                inspDAO.updateInsp(inspBean);
                break;
            }
        }
    }
	
	/* 종합검진 검사관리  - 패키지검사목록 조회  */
	@Override                
    public List<InspBean> findPckInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = inspDAO.selectPckInspList(argsMap);
        
        return inspList;
    }

	/* 종합검진 검사관리 - 선택 검사목록 조회  */
	@Override
	public List<ChoInspBean> findChoInspList(Map<String, String> argsMap) {
		List<ChoInspBean> choInspList = inspDAO.selectChoInspList(argsMap);
		return choInspList;
	}

	/* 종합검진 검사관리 - 선택 검사목록외 조회  */
	@Override
	public List<InspBean> findExChoInspList(Map<String, String> argsMap) {
		List<InspBean> exChoInspList = inspDAO.selectExChoInspList(argsMap);
		return exChoInspList;
	}

	/* 종합검진 수납 - 수납조회  */
	@Override
	public List<ReceBean> findReceList(Map<String, String> argsMap) {
		List<ReceBean> receList = receDAO.selectReceList(argsMap);
		return receList;
	}
	
	/* 종합검진 수납 - 카드승인 */
	@Override                
    public void registerRece(ReceBean receBean) {
        String newAprvNo = getNewAprvNo(receBean.getReceDate());
        
        receBean.setAprvNo(newAprvNo);
      
        receDAO.insertAprv(receBean);
        receDAO.insertRece(receBean);
    }
	
	private String getNewAprvNo(String receDate){
        Long t =Calendar.getInstance().getTimeInMillis();
        String newAprvNo = receDate.substring(2)+t.toString();
        
        return newAprvNo;
    }
    
	 /* 종합검진 접수 - 패키지 조회 */
	@Override                
    public List<PckBean> findPckList(Map<String, String> argsMap) {
        List<PckBean> pckList = pckDAO.selectPckList(argsMap);
        return pckList;
    }
	
	/* 종합검진 패키지관리 - EX 패키지 조회 */
	@Override                
	public List<InspBean> findExPckInspList(Map<String, String> argsMap) {
	    List<InspBean> pckInspList = pckDAO.selectExPckInspList(argsMap);
	    return pckInspList;
	}
	
	/* 종합검진 패키지관리 - 저장 */
	@Override                
    public void batchPckProcess(Map<String, Object> map) {
        List<PckBean> pckList = (List<PckBean>) map.get("pckList");
        List<InspBean> pckInspList = (List<InspBean>) map.get("pckInspList");
        
        for(PckBean pckBean: pckList){
            String status = pckBean.getStatus();
            
            if(status.equals("inserted")){
               pckDAO.insertPck(pckBean);
               
            }else if(status.equals("updated")){
                pckDAO.updatePck(pckBean);
            
            }else if(status.equals("deleted")){
                pckDAO.deletePckInsp(pckBean);
                pckDAO.deletePck(pckBean);
            }
        }
        
        for(InspBean inspBean: pckInspList){
            String status = inspBean.getStatus();
            
            if(status.equals("inserted")){
               pckDAO.insertPckInsp(inspBean);
               
            }else if(status.equals("deleted")){
                pckDAO.deletePckInsp2(inspBean);
            }
        }
    }
    
    @Override
    public void batchPckProcess2(PckBean pckBean) {
        String status = pckBean.getStatus();
        
        if(status.equals("inserted")){
           pckDAO.insertPck(pckBean);
           
        }else if(status.equals("updated")){
            pckDAO.updatePck(pckBean);
        }
    }
	
	/* 종합검진 접수 - 감면조회 */
	@Override               
    public List<ReducBean> findReducList(Map<String, String> argsMap) {
        List<ReducBean> reducList = receiptDAO.selectReducList(argsMap);
        
        return reducList;
    }
	
	/* 종합검진 접수 - 접수, 예약조회 */
	@Override                 
	public Map<String, Object> findRsvtReceiptList(Map<String, String> argsMap) {
	    List<RsvtBean> rsvtList = receiptDAO.selectRsvtList(argsMap);
	    List<ReceiptBean> receiptList = receiptDAO.selectReceiptList(argsMap);
	    
	        
	    Map<String, Object> map = new HashMap<>();
	    map.put("rsvtList", rsvtList);
	    map.put("receiptList", receiptList);

	    return map;
	}

	/* 종합검진 접수 - 예약검사 조회 */
	@Override                 
	public RsvtBean findRsvtInspList(Map<String, String> argsMap) {
	    RsvtBean rsvtBean = receiptDAO.selectRsvtInspList(argsMap);
	    return rsvtBean;
	}
	
	/* 종합검진 접수 - 접수 등록 */
	@Override                 
    public void registerReceipt(ReceiptBean receiptBean) {
        if(receiptBean!=null){
            String status = receiptBean.getStatus();
            
            if(status.equals("inserted")){
                int retVal = receiptDAO.insertReceipt(receiptBean);


                    receiptBean.setCancelYn("N");
                    receiptDAO.updateCancelYN(receiptBean);               
                    rsltDAO.insertBaseRsltList(receiptBean.getRsvtNo());

            }
        }
    }
	
	/* 종합검진 접수 - 접수 취소 */
	@Override
	public void cancelReceipt(ReceiptBean receiptBean) {
	    receiptDAO.updateCancelYN(receiptBean);
	}

	/* 종합검진 접수 - 접수 저장 */
	@Override                 
    public void batchReceiptProcess(Map<String, Object> map) {
        RsvtBean rsvtBean = (RsvtBean) map.get("rsvtBean");
        
        List<ChoInspBean> choInspList = (List<ChoInspBean>) map.get("choInspList");
        
        if(rsvtBean!=null){
            String choInspAmt = rsvtBean.getChoInspAmt();
            String choInspAmt2 = choInspAmt.replaceAll(",", "");
            
            rsvtBean.setChoInspAmt(choInspAmt2);
            
            rsvtDAO.updateRsvt(rsvtBean);
        }
        
        if(choInspList!=null){
            batchChoInspProcess(choInspList);
        }
    }
	
	/* 종합검진 접수 - 선택검사 일괄처리 */
	@Override                 
    public void batchPckInspProcess(List<InspBean> pckInspList) {
        for(InspBean inspBean: pckInspList){
            switch (inspBean.getStatus()){
            case "inserted" :
                receiptDAO.insertPckInsp(inspBean);
                break;
            case "deleted" :
                receiptDAO.deletePckInsp(inspBean);
                break;
            }
        }
    }
	
	/* 종합검진 결과관리 - 검진자조회 */
	@Override                 
    public List<ReceiptBean> findReceiptList(Map<String, String> argsMap) {
        List<ReceiptBean> receiptList = receiptDAO.selectReceiptList(argsMap);
        return receiptList;
    }

	/* 종합검진 결과관리 - 결과조회 */
    @Override                
    public List<RsltBean> findRsltList(Map<String, String> argsMap) {
        List<RsltBean> rsltList = rsltDAO.selectRsltList(argsMap);
        return rsltList;
    }

    /* 종합검진 결과관리 - 저장 */
    @Override                
    public void registerRslt(List<RsltBean> rsltList) {
        for(RsltBean rsltBean : rsltList){
            rsltDAO.updateRslt(rsltBean);
        }
    }

    /* 종합검진 예약관리 - 예약번호 생성*/
	@Override
	public String createNewRsvtNo(Map<String, String> argsMap) {
		
		rsvtDAO.callCreateNewRsvtNo(argsMap);
		String rsvtNo = argsMap.get("rsvtNo");
		
		if(argsMap.get("errorCode").equals("-1")){
			 new RuntimeException(argsMap.get("errorMsg"));
		}else if(argsMap.get("errorMsg").equals("1")){
			 System.out.println(argsMap.get("errorMsg"));
		}
		
		return rsvtNo;
	}
}

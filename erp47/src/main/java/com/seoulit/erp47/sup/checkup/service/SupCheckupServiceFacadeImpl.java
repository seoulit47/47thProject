
package com.seoulit.erp47.sup.checkup.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.applicationService.SupCheckupApplicationService;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.DtInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.PckBean;
import com.seoulit.erp47.sup.checkup.to.ReceBean;
import com.seoulit.erp47.sup.checkup.to.ReceiptBean;
import com.seoulit.erp47.sup.checkup.to.ReducBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.service
 * @Class    SupCheckupServiceFacadeImpl.java
 * @Create   2016. 09. 05.
 * @Author   김진환
 * @Description   종합검진 서비스 퍼사드
 *
 * @LastUpdated   2016. 09. 05. 
 */

@Service
public class SupCheckupServiceFacadeImpl implements SupCheckupServiceFacade{

	@Autowired
	   private SupCheckupApplicationService supCheckupApplicationService;

	 
	/* 종합검진 예약관리 - 예약목록 조회 */
	@Override               
	public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	   List<RsvtBean> rsvtList = supCheckupApplicationService.findRsvtList(argsMap);
	   return rsvtList;
	}
	
	/* 종합검진 예약관리 - 예약 취소 */
	@Override
	public void cancelRsvt(Map<String, String> argsMap) {
		supCheckupApplicationService.cancelRsvt(argsMap);
	}
	
	/* 종합검진 예약관리 - 저장 */
	@Override                
	public void batchRsvtProcess(Map<String, Object> map) {
	   supCheckupApplicationService.batchRsvtProcess(map);
	}
	 
	/* 종합검진 세부검사관리 - 검사 조회 */
	@Override                 
	public List<InspBean> findSimpleInspList(Map<String, String> argsMap) {
	    List<InspBean> inspList = supCheckupApplicationService.findSimpleInspList(argsMap);
	    return inspList;
	}

	/* 종합검진 세부검사관리 - 세부검사 조회 */
	@Override                
	public List<DtInspBean> findDtInspList(Map<String, String> argsMap) {
	    List<DtInspBean> dtInspList = supCheckupApplicationService.findDtInspList(argsMap);
	    return dtInspList;
	}

	 /* 종합검진 세부검사관리 - 수정, 추가 */
	@Override                
	public void batchDtInspProcess(List<DtInspBean> dtInspList) {
	    supCheckupApplicationService.batchDtInspProcess(dtInspList);
	}
	 
	/* 종합검진 패키지관리 - 패키지 검사목록 조회 */
	@Override               
	public List<InspBean> findInspList(Map<String, String> argsMap) {
	   List<InspBean> inspList = supCheckupApplicationService.findInspList(argsMap);
	   return inspList;
	}
	
	/* 종합검진 패키지관리 - 저장 */
	@Override               
    public void batchPckProcess(Map<String, Object> map) {
        supCheckupApplicationService.batchPckProcess(map);
    }
    
    @Override
    public void batchPckProcess2(PckBean pckBean) {
        supCheckupApplicationService.batchPckProcess2(pckBean);
    }

	 /*종합검진 선택검사관리 - 선택 검사목록 조회*/
	@Override
	public List<ChoInspBean> findChoInspList(Map<String, String> argsMap) {
		List<ChoInspBean> choInspList = supCheckupApplicationService.findChoInspList(argsMap);
		return choInspList;
	}

	/* 종합검진 검사관리 - 선택 검사목록외 조회*/
	@Override
	public List<InspBean> findExChoInspList(Map<String, String> argsMap) {
		List<InspBean> exChoInspList = supCheckupApplicationService.findExChoInspList(argsMap);
		return exChoInspList;
	}

	/* 종합검진 수납 - 조회 */
	@Override
	public List<ReceBean> findReceList(Map<String, String> argsMap) {
		List<ReceBean> receList = supCheckupApplicationService.findReceList(argsMap);
		return receList;
	}
	
	/* 종합검진 수납 - 카드승인  */
	@Override                
    public void registerRece(ReceBean receBean) {
        supCheckupApplicationService.registerRece(receBean);
    }
	
	 /* 종합검진 접수 - 패키지 조회 */
	@Override               
    public List<PckBean> findPckList(Map<String, String> argsMap) {
        List<PckBean> pckList = supCheckupApplicationService.findPckList(argsMap);
        return pckList;
    }
	
	/* 종합검진 패키지관리 - EX 패키지 조회 */
	@Override                
    public List<InspBean> findExPckInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = supCheckupApplicationService.findExPckInspList(argsMap);
        return inspList;
    }
	
	/* 종합검진 접수 - 감면조회  */
	@Override                
    public List<ReducBean> findReducList(Map<String, String> argsMap) {
        List<ReducBean> reducList = supCheckupApplicationService.findReducList(argsMap);
        return reducList;
    }
	
	/* 종합검진 접수 - 접수, 예약조회 */
    @Override               
    public Map<String, Object> findRsvtReceiptList(Map<String, String> argsMap) {
        Map<String, Object> map = supCheckupApplicationService.findRsvtReceiptList(argsMap);
        return map;
    }
    
    /* 종합검진 접수 - 예약검사 조회 */
    @Override               
    public RsvtBean findRsvtInspList(Map<String, String> argsMap) {
        RsvtBean rsvtBean = supCheckupApplicationService.findRsvtInspList(argsMap);
        return rsvtBean;
    }
    
    /* 종합검진 접수 - 접수 등록 */
    @Override                
    public void registerReceipt(ReceiptBean receiptBean) {
        supCheckupApplicationService.registerReceipt(receiptBean);
    }
    
    /* 종합검진 접수 - 접수 취소 */
    @Override                
    public void cancelReceipt(ReceiptBean receiptBean) {
        supCheckupApplicationService.cancelReceipt(receiptBean);
    }
    
    /* 종합검진 접수 - 접수 저장 */
    @Override               
    public void batchReceiptProcess(Map<String, Object> map) {
        supCheckupApplicationService.batchReceiptProcess(map);
    }
    
    /* 종합검진 접수 - 선택검사 일괄처리 */
    @Override                
    public void batchPckInspProcess(List<InspBean> pckInspList) {
        supCheckupApplicationService.batchPckInspProcess(pckInspList);
    }
    
}

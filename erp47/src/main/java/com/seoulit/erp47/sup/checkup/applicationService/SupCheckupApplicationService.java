package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.List;
import java.util.Map;

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

public interface SupCheckupApplicationService {
	
	/* 종합검진 검사관리 - 처방코드 조회 */
    public List<CodePopupBean> findOcsCodeList(Map<String, String> argsMap);
	
	/* 종합검진 예약관리 - 예약목록 조회 */
    public List<RsvtBean> findRsvtList(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 예약 취소 */
    public void cancelRsvt(Map<String, String> argsMap);
    
    /* 종합검진 예약관리 - 저장 */
    public void batchRsvtProcess(Map<String, Object> map);
    
    /* 종합검진 세부검사관리 - 검사 조회 */
    public List<InspBean> findSimpleInspList(Map<String, String> argsMap);

    /* 종합검진 세부검사관리 - 세부검사 조회 */
    public List<DtInspBean> findDtInspList(Map<String, String> argsMap);

    /* 종합검진 세부검사관리 - 수정, 추가 */
    public void batchDtInspProcess(List<DtInspBean> dtInspList);

    
    /* 종합검진 검사관리 - 검사목록 조회 */
    public List<InspBean> findInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 수정, 추가 */
    public void batchInspProcess(List<InspBean> inspList);
    
    /* 종합검진 검사관리 - 패키지검사목록 조회 */
    public List<InspBean> findPckInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록 조회*/
    public List<ChoInspBean> findChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 검사관리 - 선택 검사목록외 조회*/
    public List<InspBean> findExChoInspList(Map<String, String> argsMap);
    
    /* 종합검진 수납 - 조회 */
    public List<ReceBean> findReceList(Map<String, String> argsMap);
    
    /* 종합검진 수납 - 카드승인 */
    public void registerRece(ReceBean receBean);
    
    /* 종합검진 접수 - 패키지 조회 */
    public List<PckBean> findPckList(Map<String, String> argsMap);
    
    /* 종합검진 패키지관리 - EX 패키지 조회 */
    public List<InspBean> findExPckInspList(Map<String, String> argsMap);
    
    /* 종합검진 패키지관리 - 저장 */
    public void batchPckProcess(Map<String, Object> map);
    public void batchPckProcess2(PckBean pckBean);
    
    /* 종합검진 접수 - 감면조회 */
    public List<ReducBean> findReducList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 접수, 예약조회 */
    public Map<String, Object> findRsvtReceiptList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 예약검사 조회 */
    public RsvtBean findRsvtInspList(Map<String, String> argsMap);
    
    /* 종합검진 접수 - 접수 등록 */
    public void registerReceipt(ReceiptBean receiptBean);
    
    /* 종합검진 접수 - 접수 취소 */
    public void cancelReceipt(ReceiptBean receiptBean);
    
    /* 종합검진 접수 - 접수 저장 */
    public void batchReceiptProcess(Map<String, Object> map);
    
    /* 종합검진 접수 - 선택검사 일괄처리 */
    public void batchPckInspProcess(List<InspBean> pckInspList);
    
    /* 종합검진 결과관리 - 검진자조회 */
    public List<ReceiptBean> findReceiptList(Map<String, String> argsMap);
    
    /* 종합검진 결과관리 - 결과조회 */
    public List<RsltBean> findRsltList(Map<String, String> argsMap);
    
    /* 종합검진 결과관리 - 저장 */
    public void registerRslt(List<RsltBean> rsltList);

    /* 종합검진 예약관리 - 예약번호 생성*/
    public String createNewRsvtNo(Map<String, String> argsMap);
    
    
}

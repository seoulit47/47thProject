package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.Calendar;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.dao.InspDAO;
import com.seoulit.erp47.sup.checkup.dao.PckDAO;
import com.seoulit.erp47.sup.checkup.dao.ReceDAO;
import com.seoulit.erp47.sup.checkup.dao.RsvtDAO;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.ReceBean;
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
	
	/* 종합검진 검사관리  - 검사목록 조회  */
	@Override                
    public List<InspBean> findInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = inspDAO.selectInspList(argsMap);
        
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
        System.out.println(receDate+"[][][][]");
        String newAprvNo = receDate.substring(2)+t.toString();
        
        return newAprvNo;
    }
    

}

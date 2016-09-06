package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.dao.PckDAO;
import com.seoulit.erp47.sup.checkup.dao.RsvtDAO;
import com.seoulit.erp47.sup.checkup.to.InspBean;
import com.seoulit.erp47.sup.checkup.to.RsvtBean;

/**
 * @Package  com.seoul.erp47.sup.checkup.applicationService
 * @Class    SupCheckupApplicationServiceImpl.java
 * @Create   2016. 09. 05.
 * @Author   한수정
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
	
	/* 종합검진 예약관리 - 예약 조회 */
	@Override                
	public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	    List<RsvtBean> rsvtList = rsvtDAO.selectRsvtList(argsMap);
	    return rsvtList;
	}
	
	
	/* 종합검진 패키지관리 - 패키지 검사 조회 */
	@Override                 
    public List<InspBean> findPckInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = pckDAO.selectPckInspList(argsMap);
        
        return inspList;
    }
}

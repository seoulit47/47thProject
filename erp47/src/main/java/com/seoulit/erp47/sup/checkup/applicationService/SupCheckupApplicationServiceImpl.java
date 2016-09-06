package com.seoulit.erp47.sup.checkup.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.sup.checkup.dao.InspDAO;
import com.seoulit.erp47.sup.checkup.dao.PckDAO;
import com.seoulit.erp47.sup.checkup.dao.RsvtDAO;
import com.seoulit.erp47.sup.checkup.to.ChoInspBean;
import com.seoulit.erp47.sup.checkup.to.InspBean;
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
	
	/* 종합검진 예약관리 - 예약목록 조회 */
	@Override                
	public List<RsvtBean> findRsvtList(Map<String, String> argsMap) {
	    List<RsvtBean> rsvtList = rsvtDAO.selectRsvtList(argsMap);
	    return rsvtList;
	}
	
	
	/* 종합검진 검사관리  - 검사목록 조회 */
	@Override                
    public List<InspBean> findInspList(Map<String, String> argsMap) {
        List<InspBean> inspList = inspDAO.selectInspList(argsMap);
        
        return inspList;
    }

	/* 종합검진 검사관리 - 선택 검사목록 조회 */
	@Override
	public List<ChoInspBean> findChoInspList(Map<String, String> argsMap) {
		List<ChoInspBean> choInspList = inspDAO.selectChoInspList(argsMap);
		return choInspList;
	}
}

package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.dao.AccAcntDAO;
import com.seoulit.erp47.acc.elementary.dao.AccPridDAO;
import com.seoulit.erp47.acc.elementary.dao.AssiSubDAO;
import com.seoulit.erp47.acc.elementary.exception.AcntCopyException;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;

@Service
public class AccElementaryApplicationServiceImpl implements AccElementaryApplicationService {

    @Autowired
    AccAcntDAO accAcntDAO;
    @Autowired
    AssiSubDAO assiSubDAO;
    @Autowired
    AccPridDAO accPridDAO;

    @Override
    public List<AccAcntBean> findAccAcntList(Map<String, String> argsMap) {
        return accAcntDAO.selectAccAcntList(argsMap);
    }
 
	@Override
	public List<AssiSubBean> findAssiSubList(Map<String, String> argsMap) {
		return assiSubDAO.selectAssiSubList(argsMap);
	}
	
	@Override
    public List<AccPridBean> findAccPridList() {
        List<AccPridBean> accPridList = accPridDAO.selectAccPridList();
        return accPridList;
    }

	 
    @Override
    public void batchAccAcntProcess(List<AccAcntBean> accAcntList) {
        for (AccAcntBean batchAccAcntBean : accAcntList) {
            if (batchAccAcntBean.getStatus().equals("inserted")) {
                accAcntDAO.insertAccAcnt(batchAccAcntBean);
            } else if (batchAccAcntBean.getStatus().equals("deleted")) {
                accAcntDAO.deleteAccAcnt(batchAccAcntBean);
            } else if (batchAccAcntBean.getStatus().equals("updated")) {
                accAcntDAO.updateAccAcnt(batchAccAcntBean);
            }
        }
    }


    @Override
    public List<AccAcntBean> lastYearAcntCopy(Map<String, String> argsMap) throws AcntCopyException {
        AccAcntBean accAcntBean = new AccAcntBean();
        accAcntBean.setAccYear(argsMap.get("year"));
        accAcntDAO.callCopyAcnt(accAcntBean);
        if (accAcntBean.getErrorCode().equals("1")) {
            HashMap<String, String> queryMap=new HashMap<String, String>();
            queryMap.put("accYear", argsMap.get("year"));
            List<AccAcntBean> acntList = accAcntDAO.selectAccAcntList(queryMap);
            return acntList;
        } else {
            throw new AcntCopyException(accAcntBean.getErrorMsg());
        }
    }


}



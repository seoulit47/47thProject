package com.seoulit.erp47.acc.elementary.applicationService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.elementary.dao.AccAcntDAO;
import com.seoulit.erp47.acc.elementary.dao.AccPridDAO;
import com.seoulit.erp47.acc.elementary.dao.AssiSubDAO;
import com.seoulit.erp47.acc.elementary.dao.AssiTypeDAO;
import com.seoulit.erp47.acc.elementary.exception.AcntCopyException;
import com.seoulit.erp47.acc.elementary.exception.AssiCopyException;
import com.seoulit.erp47.acc.elementary.to.AccAcntBean;
import com.seoulit.erp47.acc.elementary.to.AccPridBean;
import com.seoulit.erp47.acc.elementary.to.AssiSubBean;
import com.seoulit.erp47.acc.elementary.to.AssiTypeBean;

@Service
public class AccElementaryApplicationServiceImpl implements AccElementaryApplicationService {

    @Autowired
    AccAcntDAO accAcntDAO;
    @Autowired
    AssiSubDAO assiSubDAO;
    @Autowired
    AccPridDAO accPridDAO;
    @Autowired
    AssiTypeDAO assiTypeDAO;

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


    @Override
    public AccPridBean findAccPrid(Map<String, String> argsMap) {
        return accPridDAO.selectAccPrid(argsMap);
    }
    
    @Override
    public void batchAccPridListProcess(List<AccPridBean> accPridList) {
        for (AccPridBean batchAccPridBean : accPridList) {
            if (batchAccPridBean.getStatus().equals("inserted")) {
                accPridDAO.insertAccPrid(batchAccPridBean);
            } else if (batchAccPridBean.getStatus().equals("deleted")) {
                accPridDAO.deleteAccPrid(batchAccPridBean);
            } else if (batchAccPridBean.getStatus().equals("updated")) {
                accPridDAO.updateAccPrid(batchAccPridBean);
            }
        }
    }
    
    @Override
    public List<AssiTypeBean> findAssiTypeList(Map<String, String> argsMap) {
        return assiTypeDAO.selectAssiTypeList(argsMap);
    }
    
    @SuppressWarnings("unchecked")
    @Override
    public void batchAssiCodeList(HashMap<String, Object> map) {
        List<AssiTypeBean> assiTypeList = (List<AssiTypeBean>)map.get("assiTypeCodeList");
        List<AssiSubBean> assiSubList = (List<AssiSubBean>) map.get("assiSubCodeList");
        for (AssiTypeBean assiTypeBean : assiTypeList) {
            if (assiTypeBean.getStatus().equals("inserted")) {
                assiTypeDAO.insertAssiType(assiTypeBean);
            }else if (assiTypeBean.getStatus().equals("deleted")) {
                assiTypeDAO.deleteAssiType(assiTypeBean);
            }else if (assiTypeBean.getStatus().equals("updated")) {
                assiTypeDAO.updateAssiType(assiTypeBean);
            }
        }
        
        for(AssiSubBean assiSubBean : assiSubList){
            if (assiSubBean.getStatus().equals("inserted")) {
                assiSubDAO.insertAssiSub(assiSubBean);
            }else if (assiSubBean.getStatus().equals("deleted")) {
                assiSubDAO.deleteAssiSub(assiSubBean);
            }else if (assiSubBean.getStatus().equals("updated")) {
                assiSubDAO.updateAssiSub(assiSubBean);
            }
        }
    }
    
    @Override
    public List<AssiTypeBean> lastYearAssiCodeCopy(Map<String, String> argsMap) throws AssiCopyException{
        AssiTypeBean assiTypeBean = new AssiTypeBean();
        assiTypeBean.setAccYear(argsMap.get("year"));
        assiTypeDAO.callCopyAssiCode(assiTypeBean);
        if(assiTypeBean.getErrorCode().equals("1")){
            HashMap<String, String> queryMap=new HashMap<String, String>();
            queryMap.put("accYear", argsMap.get("year"));
            List<AssiTypeBean> assiCodeList = assiTypeDAO.selectAssiTypeList(queryMap);
            return assiCodeList;
        }else {
            throw new AssiCopyException(assiTypeBean.getErrorMsg());
        }
    }

}



package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.JourDAO;
import com.seoulit.erp47.acc.resol.to.JourBean;

@Service
public class JourApplicationServiceImpl implements JourApplicationService{
    @Autowired
    JourDAO jourDAO;

    @Override
    public void registJour(List<JourBean> jourBeanList) {
        for(JourBean jourBean:jourBeanList){
            jourDAO.insertJour(jourBean);
        }
    }

    @Override
    public void batchResolLetProcess(List<JourBean> jourBeanList) {
        for(JourBean jourBean:jourBeanList){
            if(jourBean.getStatus().equals("deleted")){
                String resolNo = jourBean.getResolNo();
                jourDAO.deleteJour(resolNo);
            }
        }
        for(JourBean jourBean:jourBeanList){
            if(jourBean.getStatus().equals("inserted")){
                jourDAO.insertJour(jourBean);
            }else if(jourBean.getStatus().equals("updated")){
                jourDAO.updateJour(jourBean);
            }
        }
    }

    @Override
    public List<JourBean> findJourRecDetail(Map<String, String> argsMap) {
        return jourDAO.selectJourDetail(argsMap);
    }

}

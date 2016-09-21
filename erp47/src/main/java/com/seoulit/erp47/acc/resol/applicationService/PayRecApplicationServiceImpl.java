package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.PayRecDAO;
import com.seoulit.erp47.acc.resol.to.PayRecBean;

@Service
public class PayRecApplicationServiceImpl implements PayRecApplicationService{
    @Autowired
    PayRecDAO payRecDAO;

    @Override
    public void registPayRec(List<PayRecBean> payRecList) {
        for(PayRecBean payRecBean:payRecList){
            payRecDAO.insertPayRec(payRecBean);
        }
    }

    @Override
    public void batchResolLetProcess(List<PayRecBean> payRecList) {
        for(PayRecBean payRecBean:payRecList){
            if(payRecBean.getStatus().equals("deleted")){
                String resolNo = payRecBean.getResolNo();
                payRecDAO.deletePayRec(resolNo);
            }
        }
        for(PayRecBean payRecBean:payRecList){
            if(payRecBean.getStatus().equals("inserted")){
                payRecDAO.insertPayRec(payRecBean);
            }else if(payRecBean.getStatus().equals("updated")){
                payRecDAO.updatePayRec(payRecBean);
            }
        }
    }

    @Override
    public List<PayRecBean> findPayRecDetail(Map<String, String> argsMap) {
        return payRecDAO.selectPayRecDetail(argsMap);
    }

}

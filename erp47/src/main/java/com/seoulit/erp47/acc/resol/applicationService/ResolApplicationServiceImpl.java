package com.seoulit.erp47.acc.resol.applicationService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp47.acc.resol.dao.ResolLetDAO;
import com.seoulit.erp47.acc.resol.to.ResolLetBean;

@Service
public class ResolApplicationServiceImpl implements ResolApplicationService{
    
    @Autowired
    ResolLetDAO resolLetDAO;

    @Override
    public List<ResolLetBean> findResolLetList(Map<String, String> argsMap) {
        return resolLetDAO.selectResolLetList(argsMap);
    }

    @Override
    public String getResolNo() {
        return resolLetDAO.getResolNo();
    }

    @Override
    public void registResolLet(ResolLetBean resolLetBean) {
        resolLetDAO.insertResolLet(resolLetBean);
    }

    @Override
    public void modifyResolLet(ResolLetBean resolLetBean) {
        resolLetDAO.updateResolLet(resolLetBean);
    }

}

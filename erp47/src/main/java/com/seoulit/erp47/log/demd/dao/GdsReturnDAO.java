package com.seoulit.erp47.log.demd.dao;

import java.util.List;

import com.seoulit.erp47.log.demd.to.GdsReturnBean;

public interface GdsReturnDAO {
    public List<GdsReturnBean> selectGdsReturnList();
    public void insertGdsReturn(GdsReturnBean GdsReturnbean);
    public void updateGdsReturn(GdsReturnBean GdsReturnbean);
    public void deleteGdsReturn(GdsReturnBean GdsReturnbean);
}

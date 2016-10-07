package com.seoulit.erp47.acc.fixedasset.dao;

import java.util.List;

import com.seoulit.erp47.acc.fixedasset.to.FixedAssetMovBean;

public interface FixedAssetMovDAO {

    List<FixedAssetMovBean> selectFixedAssetMovList();

    void insertFixedAssetMov(FixedAssetMovBean fixedAssetMovBean);

    void deleteFixedAssetMov(FixedAssetMovBean fixedAssetMovBean);

    void updateFixedAssetMov(FixedAssetMovBean fixedAssetMovBean);

}

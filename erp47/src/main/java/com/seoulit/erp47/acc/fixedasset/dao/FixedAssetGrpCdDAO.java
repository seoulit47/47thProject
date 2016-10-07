package com.seoulit.erp47.acc.fixedasset.dao;

import java.util.List;

import com.seoulit.erp47.acc.fixedasset.to.FixedAssetLgGrpCdBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetMidGrpCdBean;
import com.seoulit.erp47.acc.fixedasset.to.FixedAssetSmGrpCdBean;




public interface FixedAssetGrpCdDAO {

    List<FixedAssetLgGrpCdBean> selectFixedAssetLgGrpCdList();

    List<FixedAssetMidGrpCdBean> selectFixedAssetMidGrpCdList();

    List<FixedAssetSmGrpCdBean> selectFixedAssetSmGrpCdList();

    void insertFixedAssetLgGrpCd(FixedAssetLgGrpCdBean fixedAssetLgGrpCdBean);

    void deleteFixedAssetSmGrpCd(FixedAssetSmGrpCdBean tmpFixedAssetSmGrpCdBean);

    void deleteFixedAssetMidGrpCd(FixedAssetMidGrpCdBean tmpFixedAssetMidGrpCdBean);

    void deleteFixedAssetLgGrpCd(FixedAssetLgGrpCdBean fixedAssetLgGrpCdBean);

    void updateFixedAssetLgGrpCd(FixedAssetLgGrpCdBean fixedAssetLgGrpCdBean);

    void insertFixedAssetMidGrpCd(FixedAssetMidGrpCdBean fixedAssetMidGrpCdBean);

    void updateFixedAssetMidGrpCd(FixedAssetMidGrpCdBean fixedAssetMidGrpCdBean);

    void insertFixedAssetSmGrpCd(FixedAssetSmGrpCdBean fixedAssetSmGrpCdBean);

    void updateFixedAssetSmGrpCd(FixedAssetSmGrpCdBean fixedAssetSmGrpCdBean);

}

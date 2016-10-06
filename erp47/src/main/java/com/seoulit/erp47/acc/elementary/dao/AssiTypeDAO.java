package com.seoulit.erp47.acc.elementary.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AssiTypeBean;

public interface AssiTypeDAO {

    List<AssiTypeBean> selectAssiTypeList(Map<String, String> argsMap);

    void insertAssiType(AssiTypeBean assiTypeBean);

    void deleteAssiType(AssiTypeBean assiTypeBean);

    void updateAssiType(AssiTypeBean assiTypeBean);

    void callCopyAssiCode(AssiTypeBean assiTypeBean);

}

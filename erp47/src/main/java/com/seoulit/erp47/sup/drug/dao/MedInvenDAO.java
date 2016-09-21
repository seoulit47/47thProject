package com.seoulit.erp47.sup.drug.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.sup.drug.to.MedInvenBean;

public interface MedInvenDAO {
    /* 약국 약품재고관리 - 조회 */
    List<MedInvenBean> selectMedInven(Map<String, String> argsMap);

}

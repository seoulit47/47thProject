package com.seoulit.erp47.acc.slip.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.slip.to.SlipBean;

public interface SlipDAO {

    void insertSlip(SlipBean slip);

    void updateSlipNo(HashMap<String, String> pcMap);

    void callSlipNoUpdate(Map<String, String> param);

    List<SlipBean> selectSlipList(Map<String, String> argsMap);


}

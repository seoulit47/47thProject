package com.seoulit.erp47.acc.elementary.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.CorpCardBean;

public interface CorpCardDAO {

    List<CorpCardBean> selectCorpCardList(Map<String, String> argsMap);

    void insertCorpCard(CorpCardBean batchCorpCardBean);

    void deleteCorpCard(CorpCardBean batchCorpCardBean);

    void updateCorpCard(CorpCardBean batchCorpCardBean);

}

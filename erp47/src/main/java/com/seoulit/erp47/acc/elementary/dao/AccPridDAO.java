package com.seoulit.erp47.acc.elementary.dao;

import java.util.List;
import java.util.Map;

import com.seoulit.erp47.acc.elementary.to.AccPridBean;

public interface AccPridDAO {

    List<AccPridBean> selectAccPridList();

    void insertAccPrid(AccPridBean batchAccPridBean);

    void deleteAccPrid(AccPridBean batchAccPridBean);

    void updateAccPrid(AccPridBean batchAccPridBean);

    AccPridBean selectAccPrid(Map<String, String> argsMap);

    void updateAccPridDline(AccPridBean accPrid);

    AccPridBean callCarrfor(AccPridBean accPrid);
}

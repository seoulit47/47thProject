package com.seoulit.erp47.com.util.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsBindCode")
public class BindCodeBean extends BaseBean {

    private String code,            // 코드그룹코드
                   dsName;          // 데이터셋명

}
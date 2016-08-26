package com.seoulit.erp47.com.util.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsOutCode")
public class OutCodeBean extends BaseBean {

    private String code,            // 코드그룹코드
                   value,           // 코드명
                   bigValue;        // 상세코드명

}
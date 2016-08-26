package com.seoulit.erp47.com.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsCodeNm")
public class CodeNmBean extends BaseBean {
    private String code,                // 코드
                   codeName;            // 코드명
}

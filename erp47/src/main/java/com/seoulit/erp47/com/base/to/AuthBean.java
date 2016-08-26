package com.seoulit.erp47.com.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsAuth")
public class AuthBean extends BaseBean {
    private String authCode,           // 권한코드
                   authName;           // 권한명
}
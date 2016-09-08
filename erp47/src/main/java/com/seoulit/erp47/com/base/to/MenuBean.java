package com.seoulit.erp47.com.base.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsMenu")
public class MenuBean extends BaseBean {
    private String menuCode,        // 메뉴코드
                   menuName,        // 메뉴명
                   menuLevel,       // 메뉴레벨
                   menuUrl,         // 메뉴URL
                   authCode;        // 권한코드

}
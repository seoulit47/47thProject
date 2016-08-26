package com.seoulit.post.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsPost")
public class PostBean extends BaseBean {
    
    private String zipCode,     // 우편번호
                   baseAddr;    // 기본주소
    
}

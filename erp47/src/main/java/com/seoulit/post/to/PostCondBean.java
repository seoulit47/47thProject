package com.seoulit.post.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsPostCond")
public class PostCondBean extends BaseBean {
    
    private String sidoCode,            // 시도코드
                   sidoName,            // 시도명
                   sigunguCode,         // 시군구코드
                   sigunguName,         // 시군구명
                   roadKeyword,         // 도로명키워드
                   dongKeyword;         // 동키워드

}

package com.seoulit.erp47.sup.checkup.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Package  com.seoulit.erp47.sup.checkup.to
 * @Class    CodePopupBean.java
 * @Create   2016. 09. 19.
 * @Author   한수정
 * @Description   코드팝업 Bean
 *
 * @LastUpdated   2016. 09. 19. 
 */

@Getter
@Setter
@ToString
@Dataset(name = "dsCodePopup")
public class CodePopupBean extends BaseBean {
    private String 
                code,        // 코드
                codeName;    // 코드명
}

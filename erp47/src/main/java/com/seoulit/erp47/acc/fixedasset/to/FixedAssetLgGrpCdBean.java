package com.seoulit.erp47.acc.fixedasset.to;

import java.util.List;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.annotation.Remove;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name="dsAssetLgGrpCd")
public class FixedAssetLgGrpCdBean extends BaseBean{
    private String  lgGrpCd, 
                    lgGrpCdNm;
    
    private List<FixedAssetMidGrpCdBean> fixedAssetMidGrpCdBeanList;

    @Remove
    public List<FixedAssetMidGrpCdBean> getFixedAssetMidGrpCdBeanList() {
        return fixedAssetMidGrpCdBeanList;
    }
    @Remove
    public void setFixedAssetMidGrpCdBeanList(List<FixedAssetMidGrpCdBean> fixedAssetMidGrpCdBeanList) {
        this.fixedAssetMidGrpCdBeanList = fixedAssetMidGrpCdBeanList;
    }

}
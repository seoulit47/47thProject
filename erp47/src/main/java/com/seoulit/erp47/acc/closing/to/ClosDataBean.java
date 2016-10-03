package com.seoulit.erp47.acc.closing.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsClosData")
public class ClosDataBean extends BaseBean {
    String  artiCd         
            ,artiNm            
            ,amt             
            ,sumAmt          
            ,jourAmt          
            ,cellInputDiv       
            ,autoCalYn        
            ,sumArtiCd        
            ,deductYn
            ,level;         
    
}
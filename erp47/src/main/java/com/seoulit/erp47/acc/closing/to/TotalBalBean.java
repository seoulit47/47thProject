package com.seoulit.erp47.acc.closing.to;

import com.seoulit.erp47.common.annotation.Dataset;
import com.seoulit.erp47.common.to.BaseBean;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Dataset(name = "dsTotalBal")
public class TotalBalBean extends BaseBean {
    String  acntCd,      //���������ڵ�
            acntNm,      //��������
            debBal,      //�����ܾ�
            debSum,      //�����հ�
            creSum,      //�뺯�հ�
            creBal,
            level;      //�뺯�ܾ�
}
package com.seoulit.post.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.seoulit.post.to.PostBean;
import com.seoulit.post.to.PostCondBean;


public interface PostDAO {

    List<PostCondBean> selectSidoList();

    List<PostCondBean> selectSigunguList(@Param("sido") String sido);

    List<PostBean> selectRoadPostList(PostCondBean postCondBean);

    List<PostBean> selectDongPostList(@Param("dong") String dong);

}

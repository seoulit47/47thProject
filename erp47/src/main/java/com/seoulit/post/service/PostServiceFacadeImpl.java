package com.seoulit.post.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.post.applicationService.PostApplicationService;
import com.seoulit.post.to.PostBean;
import com.seoulit.post.to.PostCondBean;

@Service
public class PostServiceFacadeImpl implements PostServiceFacade {

	@Autowired
	private PostApplicationService postApplicationService;

    @Override
    public List<PostCondBean> findSidoList() {
        return postApplicationService.findSidoList();
    }
    @Override
    public List<PostCondBean> findSigunguList(String sido) {
        return postApplicationService.findSigunguList(sido);
    }
    @Override
    public List<PostBean> findRoadPostList(PostCondBean postCondBean) {
        return postApplicationService.findRoadPostList(postCondBean);
    }
    @Override
    public List<PostBean> findDongPostList(String dong) {
        return postApplicationService.findDongPostList(dong);
    }
}

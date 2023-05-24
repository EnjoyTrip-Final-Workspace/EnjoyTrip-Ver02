package com.ssafy.vue.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.model.Plan;
import com.ssafy.vue.model.service.PlanService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/plan")
public class PlanController {
	public static final org.slf4j.Logger logger = LoggerFactory.getLogger(PlanController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
	
	private PlanService planService;

	public PlanController(PlanService planService) {
		super();
		this.planService = planService;
	}
	
	@ApiOperation(value = "여행지담기", notes = "선택한 여행지를 담는다.", response = Map.class)
    @PostMapping("/myplan")
    public ResponseEntity<Map<String, Object>> addplan(
            @RequestBody @ApiParam(value = "계획 등록 시 필요한 정보(userid, content_id).", required = true) Plan plan) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            boolean isSuccess = planService.addPlan(plan);
            if (isSuccess) {
                resultMap.put("message", SUCCESS);
                status = HttpStatus.CREATED;
            } else {
                resultMap.put("message", FAIL);
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } catch (Exception e) {
            logger.error("계획등록 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}

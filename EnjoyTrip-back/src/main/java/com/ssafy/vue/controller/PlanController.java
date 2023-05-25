package com.ssafy.vue.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.vue.model.Attraction;
import com.ssafy.vue.model.Plan;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

//    @ApiOperation(value = "여행지담기", notes = "선택한 여행지를 담는다.", response = Map.class)
//    @PostMapping("/myplan")
//    public ResponseEntity<Map<String, Object>> addplan(
//            @RequestBody @ApiParam(value = "계획 등록 시 필요한 정보(userid, content_id).", required = true) List<Plan> plan) {
//        Map<String, Object> resultMap = new HashMap<>();
//        HttpStatus status = null;
//        try {
//            boolean isSuccess = planService.addPlan(plan);
//            if (isSuccess) {
//                resultMap.put("message", SUCCESS);
//                status = HttpStatus.CREATED;
//            } else {
//                resultMap.put("message", FAIL);
//                status = HttpStatus.INTERNAL_SERVER_ERROR;
//            }
//        } catch (Exception e) {
//            logger.error("계획등록 실패 : {}", e);
//            resultMap.put("message", e.getMessage());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
//        }
//        return new ResponseEntity<Map<String, Object>>(resultMap, status);
//    }
    @ApiOperation(value = "여행지담기", notes = "선택한 여행지를 담는다.", response = Map.class)
    @PostMapping("/myplan")
    public ResponseEntity<Map<String, Object>> addPlan(
            @RequestBody @ApiParam(value = "계획 등록 시 필요한 정보(userid, content_id).", required = true) List<Plan> plans) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try {
            // 중복 체크를 위해 컨트롤러에서 데이터베이스에 쿼리를 실행하여 결과를 확인
            for (Plan plan : plans) {
                boolean isDuplicate = planService.checkDuplicate(plan.getUserid(), plan.getContent_id());
                if (isDuplicate) {
                    resultMap.put("message", "중복된 데이터가 있습니다.");
                    status = HttpStatus.BAD_REQUEST;
                    return new ResponseEntity<>(resultMap, status);
                }
            }

            // 중복 체크를 통과한 경우 등록을 진행
            boolean isSuccess = planService.addPlan(plans);
            if (isSuccess) {
                resultMap.put("message", "계획이 성공적으로 등록되었습니다.");
                status = HttpStatus.CREATED;
            } else {
                resultMap.put("message", "계획 등록에 실패했습니다.");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } catch (Exception e) {
            logger.error("계획 등록 실패 : {}", e);
            resultMap.put("message", "계획 등록 중 오류가 발생했습니다.");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }

   

    @ApiOperation(value = "여행지 조회", notes = "사용자가 선택한 여행지를 보여준다.", response = Map.class)
    // 상세 페이지에서 선택한 contentId로 조회하는 컨트롤러
    @GetMapping("/myplan/{userid}")
    public ResponseEntity<List<Attraction>> getPlan(@PathVariable String userid) {
        try {
            List<Attraction> attraction = planService.getPlan(userid);
            return ResponseEntity.ok().body(attraction);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



    @ApiOperation(value = "계획 삭제", notes = "선택한 계획을 삭제합니다.", response = Map.class)
    @DeleteMapping("/myplan/{userid}/{content_id}")
    public ResponseEntity<Map<String, Object>> deletePlan(
            @PathVariable("userid") @ApiParam(value = "사용자 ID", required = true) String userId,
            @PathVariable("content_id") @ApiParam(value = "컨텐츠 ID", required = true) int contentId) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            boolean isSuccess = planService.deletePlan(userId, contentId);
            if (isSuccess) {
                resultMap.put("message", SUCCESS);
                status = HttpStatus.OK;
            } else {
                resultMap.put("message", FAIL);
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } catch (Exception e) {
            logger.error("계획 삭제 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
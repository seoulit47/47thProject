package com.seoulit.erp47.common.aspect;

import org.aspectj.lang.ProceedingJoinPoint;

import lombok.extern.slf4j.Slf4j;

@Slf4j
//@Component
//@Aspect
public class LoggerAspect {
    
    public Object aroundLogging(ProceedingJoinPoint joinPoint) throws Throwable {
        String name = joinPoint.getSignature().getName();
        String type = joinPoint.getSignature().getDeclaringTypeName();
        
        log.debug("{}.{}() 시작", type, name);
       
        Object returnValue = joinPoint.proceed();
        
        log.debug("{}.{}() 끝", type, name);
        
        return returnValue;
        
    }
}

package com.niuma.controller;

import com.niuma.common.Result;
import niuma.com.chatgpt.GPTClient;
import niuma.com.chatgpt.entity.ChatGPTMessage;
import niuma.com.chatgpt.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chatgpt")
public class ChatGptController {
    @Autowired
    private GPTClient gptClient;

    @PostMapping
    public Result getMessage(@RequestBody List<Message> messages) {
        try {
            ChatGPTMessage send = gptClient.send(messages);
            return Result.success(send);
        } catch (Exception e) {
            return Result.fail("请求错误", null);
        }
    }
    @PostMapping("/easy")
    public Result getEasyMessage(@RequestBody List<Message> messages) {
        try {
            ChatGPTMessage send = gptClient.send(messages);
            Message message = send.getEasyMessage();
            return Result.success(message);
        } catch (Exception e) {
            return Result.fail("请求错误", null);
        }
    }
}

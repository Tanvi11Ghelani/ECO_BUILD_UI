import React, { useState, useRef, useEffect } from "react";
import { OpenAI } from "openai";
import { useTranslation } from "react-i18next";

export default function EcoChat({ open, onClose }) {
  const { t, i18n } = useTranslation();
  const [chatStarted, setChatStarted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        t("hello_nice_to_see_you_here") || "Hello 👋 Nice to see you here!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Detect RTL languages
  const isRTL = ["he", "ar"].includes(i18n.language);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  if (!open) return null;

  // OpenAI client configuration
  const client = new OpenAI({
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  const handleStart = () => setChatStarted(true);
  const handleMinimize = () => setIsMinimized(!isMinimized);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedFile) return;

    let userMessageContent = input;
    let fileInfo = null;

    // If there's a file, add it to the message
    if (selectedFile) {
      fileInfo = {
        name: selectedFile.name,
        type: selectedFile.type,
        size: selectedFile.size,
        preview: previewUrl,
      };

      if (input.trim()) {
        userMessageContent = input;
      } else {
        userMessageContent = `📎 ${selectedFile.name}`;
      }
    }

    const userMessage = {
      role: "user",
      content: userMessageContent,
      file: fileInfo,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setLoading(true);

    try {
      // For image files, we can use vision API
      let apiMessages = newMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: apiMessages,
      });

      const aiMessage = {
        role: "assistant",
        content: response.choices[0].message.content,
      };

      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            t("error_message") ||
            "Sorry, I ran into an issue. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const chatPopupStyle = {
    position: "fixed",
    bottom: "20px",
    right: isRTL ? "auto" : "20px",
    left: isRTL ? "20px" : "auto",
    width: isMinimized ? "300px" : "360px",
    maxHeight: "90vh",
    height: isMinimized ? "60px" : "600px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "all 0.3s ease",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    direction: isRTL ? "rtl" : "ltr",
    boxSizing: "border-box",
    zIndex: 1000,
    marginBottom: isMinimized ? "0" : "120px",
  };

  const chatHeaderStyle = {
    backgroundColor: "#f8f9fa",
    padding: "16px 20px",
    borderBottom: "1px solid #e0e0e0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "60px",
    flexShrink: 0,
  };

  const headerTitleStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  };

  const headerButtonsStyle = {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#666",
    padding: "4px 8px",
    transition: "color 0.2s",
  };

  const chatBodyStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 30px",
    backgroundColor: "#fff",
    textAlign: "center",
    overflow: "auto",
  };

  const avatarStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#00bcd4",
    marginBottom: "24px",
    flexShrink: 0,
  };

  const welcomeTextStyle = {
    fontSize: "15px",
    color: "#333",
    marginBottom: "12px",
    fontWeight: "600",
    lineHeight: "1.5",
  };

  const privacyTextStyle = {
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "24px",
    maxWidth: "280px",
  };

  const startButtonStyle = {
    backgroundColor: "#00D4FF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "12px 40px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
    width: "calc(100% - 40px)",
    maxWidth: "280px",
  };

  const chatActiveStyle = {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minHeight: 0,
  };

  const messageStyle = (isBot) => ({
    padding: "10px 14px",
    borderRadius: "12px",
    maxWidth: "75%",
    wordWrap: "break-word",
    fontSize: "14px",
    lineHeight: "1.5",
    alignSelf: isBot
      ? isRTL
        ? "flex-end"
        : "flex-start"
      : isRTL
      ? "flex-start"
      : "flex-end",
    backgroundColor: isBot ? "#fff" : "#00D4FF",
    color: isBot ? "#333" : "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  });

  const filePreviewStyle = {
    marginTop: "8px",
    maxWidth: "200px",
    borderRadius: "8px",
  };

  const fileAttachmentStyle = {
    padding: "8px 12px",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "8px",
    marginTop: "6px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const inputBarStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    borderTop: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    gap: "8px",
    flexShrink: 0,
  };

  const filePreviewContainerStyle = {
    display: selectedFile ? "flex" : "none",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    marginBottom: "4px",
  };

  const previewImageStyle = {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  const fileInfoStyle = {
    flex: 1,
    fontSize: "13px",
    color: "#333",
  };

  const removeFileButtonStyle = {
    background: "none",
    border: "none",
    color: "#666",
    cursor: "pointer",
    fontSize: "18px",
    padding: "4px",
  };

  const inputRowStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px 14px",
    border: "1px solid #e0e0e0",
    borderRadius: "20px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    direction: isRTL ? "rtl" : "ltr",
  };

  const attachButtonStyle = {
    backgroundColor: "transparent",
    color: "#666",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "20px",
    transition: "background-color 0.2s",
    flexShrink: 0,
  };

  const sendButtonStyle = {
    backgroundColor: "#00D4FF",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.2s",
    flexShrink: 0,
  };

  const chatFooterStyle = {
    padding: "12px 16px",
    textAlign: "center",
    fontSize: "12px",
    color: "#666",
    borderTop: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    flexShrink: 0,
  };

  return (
    <div style={chatPopupStyle}>
      <div style={chatHeaderStyle}>
        <span style={headerTitleStyle}>
          {t("ecobuild_assistant") || "Ecobuild Assistant"}
        </span>
        <div style={headerButtonsStyle}>
          <button
            style={closeButtonStyle}
            onClick={handleMinimize}
            onMouseEnter={(e) => (e.target.style.color = "#333")}
            onMouseLeave={(e) => (e.target.style.color = "#666")}
          >
            {isMinimized ? "□" : "—"}
          </button>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            onMouseEnter={(e) => (e.target.style.color = "#333")}
            onMouseLeave={(e) => (e.target.style.color = "#666")}
          >
            ✕
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {!chatStarted ? (
            <div style={chatBodyStyle}>
              <div style={avatarStyle} />
              <p style={welcomeTextStyle}>
                {t("hello_nice_to_see_you_here") ||
                  "Hello Nice to see you here!"}
              </p>
              <p style={privacyTextStyle}>
                {t(
                  "by_pressing_the_start_chat_button"
                ) ||
                  'By pressing the "Start chat" button you agree to have your personal data processed as described in our Privacy Policy'}
              </p>
              <button
                style={startButtonStyle}
                onClick={handleStart}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#00acc1")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00bcd4")
                }
              >
                {t("start_chat") || "Start chat"}
              </button>
            </div>
          ) : (
            <>
              <div style={chatActiveStyle}>
                {messages.map((msg, i) => (
                  <div key={i} style={messageStyle(msg.role === "assistant")}>
                    {msg.content}
                    {msg.file && msg.file.preview && (
                      <img
                        src={msg.file.preview}
                        alt={msg.file.name}
                        style={filePreviewStyle}
                      />
                    )}
                    {msg.file && !msg.file.preview && (
                      <div style={fileAttachmentStyle}>📄 {msg.file.name}</div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div style={messageStyle(true)}>
                    {t("assistant_is_typing") || "Assistant is typing..."}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div style={inputBarStyle}>
                {/* File Preview */}
                <div style={filePreviewContainerStyle}>
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="preview"
                      style={previewImageStyle}
                    />
                  ) : (
                    <div style={{ fontSize: "24px" }}>📄</div>
                  )}
                  <div style={fileInfoStyle}>
                    <div style={{ fontWeight: "500" }}>
                      {selectedFile?.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#999" }}>
                      {selectedFile && (selectedFile.size / 1024).toFixed(1)} KB
                    </div>
                  </div>
                  <button
                    style={removeFileButtonStyle}
                    onClick={handleRemoveFile}
                  >
                    ✕
                  </button>
                </div>

                {/* Input Row */}
                <div style={inputRowStyle}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*,.pdf,.doc,.docx,.txt"
                    style={{ display: "none" }}
                  />
                  <button
                    style={attachButtonStyle}
                    onClick={() => fileInputRef.current?.click()}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f0f0f0")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    📎
                  </button>
                  <input
                    type="text"
                    style={inputStyle}
                    placeholder={t("write_a_message") || "Write a message..."}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                  <button
                    style={sendButtonStyle}
                    onClick={handleSend}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#00D4FF")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#00D4FF")
                    }
                  >
                    ➤
                  </button>
                </div>
              </div>
            </>
          )}
          <div style={chatFooterStyle}>
            {t("powered_by") || "Powered by"}{" "}
            <strong>
              {t("ecobuild_system_ltd") || "Ecobuild System Ltd."}
            </strong>
          </div>
        </>
      )}
    </div>
  );
}

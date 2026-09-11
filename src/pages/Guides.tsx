import { CONFIG } from "../config";

export function Guides() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-24">
      {/* Page Title */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase">
          HƯỚNG DẪN
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium">
          Thông tin dành cho thành viên
        </p>
      </section>

      {/* Intro Card */}
      <section className="mb-16">
        <div className="bg-primary-light p-6 md:p-12 rounded-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-text mb-4 tracking-wider uppercase">
            HƯỚNG DẪN
          </h2>
          <p className="text-text-muted md:text-lg leading-relaxed text-justify">
            Các hướng dẫn dưới đây cung cấp những thông tin cần thiết để bạn tham gia và sử dụng nhóm thuận lợi hơn.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="flex flex-col gap-16">
        
        {/* Guide 01 */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-bold text-primary opacity-20 leading-none">01</span>
            <h3 className="text-2xl md:text-3xl font-bold text-text uppercase tracking-wide mt-2">
              HƯỚNG DẪN ĐĂNG BÀI
            </h3>
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl font-medium mt-2">
              Hướng dẫn những yêu cầu cơ bản trước khi gửi duyệt bài viết,
              bao gồm cách sử dụng hashtag, ghi nguồn tác phẩm,
              các nội dung không được xét duyệt và một số lưu ý
              giúp bài viết được xét duyệt thuận lợi hơn.
            </p>
          </div>
          
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="p-6 md:p-12 space-y-8 text-text-muted md:text-lg leading-relaxed max-h-[500px] overflow-y-auto custom-scrollbar">
              <p className="font-bold text-text">Để bài viết được xét duyệt thuận lợi, vui lòng kiểm tra một số nội dung sau trước khi gửi duyệt.</p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">1. Thêm hashtag cho bài viết</h4>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>
                    Mỗi bài viết cần có <span className="italic">ít nhất 1 hashtag</span> phân loại nội dung.<br/>
                    <span className="font-medium text-text mt-1 block">Ví dụ:</span>
                    <span className="block mt-1">#RP<br/>#Roleplaying<br/>#NhapVai<br/>#NhanVat<br/>#Hoidap<br/>#Chiase<br/>#Gioithieunhanvat<br/>#Character</span>
                  </li>
                  <li>Bạn có thể sử dụng hashtag cá nhân hoặc hashtag riêng của mình, tuy nhiên cần <span className="italic">kèm theo ít nhất 1 hashtag chung</span> để giúp phân loại bài viết trong nhóm.</li>
                  <li>Nếu không biết nên dùng hashtag nào, bạn có thể sử dụng:<br/><span className="font-medium text-text block mt-1">#RP hoặc #NhapVai</span></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">2. Ghi nguồn khi sử dụng tác phẩm của người khác</h4>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Khi đăng tải nội dung có kèm tranh ảnh (art), truyện tranh (comic) và nội dung do người khác tạo, thành viên cần ghi rõ nguồn hoặc tên tác giả.</li>
                  <li>Không sử dụng hoặc phân phối lại nội dung khi chưa có credit và sự đồng ý chính thức của tác giả.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">3. Kiểm tra nội dung trước khi gửi duyệt</h4>
                <p>Bài viết có thể bị từ chối nếu thuộc các trường hợp như:</p>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Mua bán hoặc trao đổi tài khoản, check legit, trung gian giao dịch hoặc các nội dung liên quan đến giao dịch.</li>
                  <li>Tuyển thành viên, quảng bá hoặc dẫn liên kết tới nhóm/box bên ngoài.</li>
                  <li>Nội dung vi phạm nội quy nhóm.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary">4. Hạn chế đăng lại bài trong thời gian ngắn</h4>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Đối với các bài viết có nội dung trùng lặp, vui lòng giãn cách khoảng 4–5 ngày trước khi đăng lại.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guide 02 */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-bold text-primary opacity-20 leading-none">02</span>
            <h3 className="text-2xl md:text-3xl font-bold text-text uppercase tracking-wide mt-2">
              HƯỚNG DẪN XỬ LÝ KHI BÀI VIẾT BỊ TỪ CHỐI
            </h3>
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl font-medium mt-2">
              Hướng dẫn cách xem phản hồi kiểm duyệt,
              tìm hiểu nguyên nhân bài viết bị từ chối
              và điều chỉnh nội dung trước khi gửi duyệt lại.
            </p>
          </div>
          
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="p-6 md:p-12 space-y-8 text-text-muted md:text-lg leading-relaxed max-h-[500px] overflow-y-auto custom-scrollbar">
              <h4 className="text-xl font-bold text-text">Nếu bài viết của bạn bị từ chối duyệt, hãy xem phản hồi từ Ban Quản Trị để biết nguyên nhân và những nội dung cần điều chỉnh trước khi gửi duyệt lại.</h4>
              
              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Xem phản hồi từ Ban Quản Trị</h5>
                <p>Để xem phản hồi đối với bài viết bị từ chối duyệt:</p>
                <ol className="list-decimal pl-6 space-y-2 marker:font-semibold marker:text-text">
                  <li>Truy cập vào nhóm.</li>
                  <li>Nhấn vào biểu tượng <span className="font-bold">ba chấm</span> (⋯).</li>
                  <li>Chọn <span className="font-bold">Quản lý nội dung</span>.</li>
                  <li>Tìm bài viết đã bị từ chối duyệt.</li>
                  <li>Nhấn <span className="font-bold">Xem chi tiết</span> để đọc phản hồi từ Ban Quản Trị.</li>
                </ol>
                <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-primary">
                  <li>Mỗi bài viết được xem xét dựa trên nội dung cụ thể, vì vậy nguyên nhân từ chối và hướng dẫn điều chỉnh có thể khác nhau giữa từng trường hợp.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Gửi duyệt lại bài viết</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Sau khi đọc phản hồi và hoàn tất các điều chỉnh cần thiết, bạn có thể gửi duyệt lại bài viết để được xem xét lần nữa.</li>
                  <li>Trước khi gửi duyệt lại, hãy kiểm tra rằng bài viết đã được chỉnh sửa theo phản hồi nhận được và phù hợp với các quy định hiện hành của nhóm.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Cần hỗ trợ thêm?</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Nếu bạn chưa hiểu phản hồi nhận được hoặc không chắc cần chỉnh sửa nội dung nào, vui lòng liên hệ Ban Quản Trị để được giải thích và hỗ trợ.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Một vài lưu ý:</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Việc từ chối duyệt bài không đồng nghĩa với việc thành viên bị xử phạt.</li>
                  <li>Trong nhiều trường hợp, bài viết chỉ cần được điều chỉnh hoặc bổ sung thông tin trước khi gửi duyệt lại.</li>
                  <li>Vui lòng đọc kỹ phản hồi trước khi gửi lại bài viết.</li>
                  <li>Nếu có thắc mắc liên quan đến quá trình xét duyệt, hãy trao đổi trực tiếp với Ban Quản Trị để được hỗ trợ chính xác nhất.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guide 03 */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-5xl md:text-6xl font-bold text-primary opacity-20 leading-none">03</span>
            <h3 className="text-2xl md:text-3xl font-bold text-text uppercase tracking-wide mt-2">
              LIÊN HỆ & HỖ TRỢ
            </h3>
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl font-medium mt-2">
              Thông tin liên hệ và phạm vi hỗ trợ dành cho thành viên
              khi cần giải đáp hoặc gặp vấn đề liên quan đến hoạt động trong nhóm.
            </p>
          </div>
          
          <div className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="p-6 md:p-12 space-y-8 text-text-muted md:text-lg leading-relaxed max-h-[500px] overflow-y-auto custom-scrollbar">
              <h4 className="text-xl font-bold text-text">Nếu bạn cần hỗ trợ liên quan đến bài viết, nội quy hoặc các vấn đề phát sinh trong nhóm, vui lòng liên hệ với Ban Quản Trị để được hỗ trợ.</h4>
              
              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Khi nào nên liên hệ?</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Khi bạn cần giải đáp về nội quy hoặc bài viết.</li>
                  <li>Khi cần hỗ trợ về quá trình xét duyệt bài viết.</li>
                  <li>Khi phát hiện nội dung có dấu hiệu vi phạm nội quy nhóm.</li>
                  <li>Khi gặp các vấn đề khác liên quan đến hoạt động trong nhóm.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Cách liên hệ</h5>
                <p className="italic">Thành viên có thể liên hệ với Ban Quản Trị thông qua:</p>
                <div className="pl-6 space-y-1 font-semibold text-text border-l-2 border-primary/20 ml-2 py-1">
                  <p>Các kiểm duyệt viên</p>
                  <p>Page/Email của nhóm</p>
                </div>
                <ul className="list-disc pl-6 space-y-3 mt-4 marker:text-primary">
                  <li><span className="italic">Các tài khoản cá nhân của Quản Trị Viên không tiếp nhận yêu cầu hỗ trợ từ thành viên.</span></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Khi liên hệ, hãy cung cấp:</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Liên kết bài viết hoặc nội dung liên quan (nếu có).</li>
                  <li>Ảnh chụp màn hình của vấn đề đang gặp phải (nếu cần thiết).</li>
                  <li>Mô tả ngắn gọn và rõ ràng nội dung cần hỗ trợ.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="text-lg font-bold text-primary">Một vài lưu ý:</h5>
                <ul className="list-disc pl-6 space-y-3 marker:text-primary">
                  <li>Ban Quản Trị sẽ cố gắng phản hồi trong thời gian sớm nhất có thể.</li>
                  <li>Một số vấn đề nằm ngoài phạm vi quản lý của nhóm có thể không được hỗ trợ hoặc xử lý.</li>
                  <li>Việc cung cấp đầy đủ thông tin sẽ giúp quá trình hỗ trợ diễn ra nhanh chóng và chính xác hơn.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

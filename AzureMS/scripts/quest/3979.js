// �ƽ��� ���� : ������ ����!
// made by ��Ʈ����(tnqhd1124) �Ǵ� ��ǻ��(tnqhd1139)
// Pure DEV

importPackage(Packages.server.quest);

var status = -1;
var select= -1;
function start(mode, type, selection) {
	if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	}
    if (status == 0) {
	    qm.sendNext("�������� ������ ������ ����, ���� ����� ������ �ְڳ�. #r���� 2�ú��� 8�� ����#k�� �������� �����ϸ� #bȭ�� ���� #i3800265#����Ʈ �˸���#k�� ���� �ع��� ���� ��� ����Ʈ�� ������ �� �ֳ�."); 
	} else if (status == 1) {
		qm.sendNextPrev("����Ʈ�� �ް� ���͸� ����ϸ� �ƽ��� ���� ����#i4033160#�� ���� �� ����.#r���� ���� 100��#k�� ��� ��Ҵٸ� �� ���� ��Ż�� ���� ������ �̵��Ͽ� �����Է� ���� �Ϸ��� �� �ִٳ�.");
    } else if (status == 2) {
		qm.sendNextPrev("�������� �Ϸ��ϸ� ���� ������ ���� ����ġ�� �������� ���޹��� �� �ִٳ�. #b�������� ������ ����� �������� �ع����� ����� ������ ����#k�� ��ĥ �� ������ �������� ��Ȧ�� �ؼ��� �ȵ� ���̾�.");
    } else if (status == 3) {
		qm.sendNextPrev("��������� �������� ���� ����ϼ�. Ȥ�� ������ ��ﳪ�� �ʰų� �ٽ� ��� �ʹٸ� �����ʿ� �ִ� #b�繫��� ����#k���� �ٽ� ����Գ�. ���� �� �� �״�� �ٽ� �Ϸ��� �ɼ�. ���� �������� ������ ���ڴ°�?");
		qm.completeQuest(3979);
		qm.dispose();
	}
}